import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ProfileModal from "../components/Modal/ProfileModal";
import { graphPathList, urlSet } from "../constants/urls";
import root from "window-or-global";
import StatisticGraph from "../components/graph/StatisticGraph";
import { CompareContentGraphDiv, CompareDiv, CompareTopDiv } from "./compare";
import {
  convertHitterStat,
  convertPitcherStat,
} from "../utils/ConvertStatInfo";

const SinglePage = ({ pid }) => {
  const [playerInfo, setPlayerInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    if (!pid) {
      root.close();
    } else {
      await axios
        .get(urlSet.compare + `?pidL=${pid}`)
        .then(({ data: { data } }) => {
          if (Object.keys(data.p1Info.statInfo).includes("ops")) {
            convertHitterStat(data.p1Info.statInfo);
            convertHitterStat(data.avgInfo.statInfo);
          } else {
            convertPitcherStat(data.p1Info.statInfo);
            convertPitcherStat(data.avgInfo.statInfo);
          }
          setPlayerInfo(data);
          // 여기서 산점도 api 불러오기 + 좌표 세개 넘기기 (좌, 우, 평균치 순서대로)
          axios.get(urlSet.scatter, {
            params: {
              type: Object.keys(data.p1Info.statInfo).includes("OPS")
                ? `타자`
                : `투수`,
              markerList: {
                x: [data.p1Info.statInfo["G"], data.avgInfo.statInfo["G"]],
                y: [data.p1Info.statInfo["WAR"], data.avgInfo.statInfo["WAR"]],
              },
            },
          });
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [pid]);

  useEffect(async () => {
    if (loading) {
      let isLoading = true;
      while (isLoading) {
        for await (const filePath of graphPathList) {
          await axios
            .put(urlSet.checkFile, {
              filePath: filePath,
            })
            .then(({ data: { data } }) => {
              console.log(data);
              if (data) {
                isLoading = false;
              } else {
                isLoading = true;
                return;
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
      setLoading(false);
    }
  }, [loading]);

  return !loading && playerInfo ? (
    <CompareDiv>
      <CompareTopDiv>
        <ProfileModal side={"A"} data={playerInfo.p1Info} />
      </CompareTopDiv>
      )
      <CompareContentGraphDiv>
        <StatisticGraph type={`single`} data={playerInfo} />
      </CompareContentGraphDiv>
    </CompareDiv>
  ) : (
    <div>
      <img src="images/이럴수가.jpg" />
    </div>
  );
};

SinglePage.getInitialProps = async (context) => {
  const { pid } = context.query;
  return { pid: pid };
};

export default SinglePage;
