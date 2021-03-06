import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import ProfileModal from "../components/Modal/ProfileModal";
import { colors } from "../constants/colors";
import { graphPathList, urlSet } from "../constants/urls";
import { selectedPlayerState } from "../recoil/search";
import root from "window-or-global";
import ButtonType1 from "../components/Button/ButtonType1";
import StatisticGraph from "../components/graph/StatisticGraph";
import StatisticTable from "../components/graph/StatisticTable";
import TextBadge from "../components/Badge/TextBadge";
import { valueExtractor } from "../utils/functions";
import {
  convertHitterStat,
  convertPitcherStat,
} from "../utils/ConvertStatInfo";
import { StyleModal } from "../components/Modal/StyleModal";

const ComparePage = () => {
  const [selectedPlayer, setSelectedPlayer] =
    useRecoilState(selectedPlayerState);

  const [playerInfoList, setPlayerInfoList] = useState(null);
  // curScreen:
  //  true: ν
  //  false: κ·Έλν
  const [curScreen, setCurScreen] = useState(true);

  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    if (selectedPlayer.length !== 2) {
      root.close();
    } else {
      const pidList = valueExtractor({ data: selectedPlayer, key: `id` });
      await axios
        .get(
          urlSet.compare +
          `?a=a${pidList ? `&pidL=${pidList[0]}&pidR=${pidList[1]}` : ``}`
        )
        .then(({ data: { data } }) => {
          console.log(data);
          if (Object.keys(data.p1Info.statInfo).includes("ops")) {
            convertHitterStat(data.p1Info.statInfo);
            convertHitterStat(data.p2Info.statInfo);
            convertHitterStat(data.avgInfo.statInfo);
          } else {
            convertPitcherStat(data.p1Info.statInfo);
            convertPitcherStat(data.p2Info.statInfo);
            convertPitcherStat(data.avgInfo.statInfo);
          }
          setPlayerInfoList(data);
          // μ¬κΈ°μ μ°μ λ api λΆλ¬μ€κΈ° + μ’ν μΈκ° λκΈ°κΈ° (μ’, μ°, νκ· μΉ μμλλ‘)
          axios.get(urlSet.scatter, {
            params: {
              type: Object.keys(data.p1Info.statInfo).includes("OPS")
                ? `νμ`
                : `ν¬μ`,
              markerList: {
                x: [
                  data.p1Info.statInfo["G"],
                  data.p2Info.statInfo["G"],
                  data.avgInfo.statInfo["G"],
                ],
                y: [
                  data.p1Info.statInfo["WAR"],
                  data.p2Info.statInfo["WAR"],
                  data.avgInfo.statInfo["WAR"],
                ],
              },
            },
          });
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, []);

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

  const handleClick = useCallback(() => {
    setCurScreen(!curScreen);
  }, [curScreen]);

  return !loading && playerInfoList ? (
    <CompareDiv>
      <CompareTopDiv>
        <CompareModalSetDiv>
          <ProfileModal side={"L"} data={playerInfoList.p1Info} />
          <StyleModal side={"L"} styleList={Object.values(playerInfoList.p1Info.styleInfo)} />
        </CompareModalSetDiv>
        <h1>VS</h1>
        <CompareModalSetDiv>
          <StyleModal side={"R"} styleList={Object.values(playerInfoList.p2Info.styleInfo)} />
          <ProfileModal side={"R"} data={playerInfoList.p2Info} />
        </CompareModalSetDiv>
      </CompareTopDiv>
      )
      {curScreen ? (
        <CompareContentDiv>
          <StatisticTable type={`compare`} data={playerInfoList} />
        </CompareContentDiv>
      ) : (
        <CompareContentGraphDiv>
          <StatisticGraph type={`compare`} data={playerInfoList} />
        </CompareContentGraphDiv>
      )}
      <CompareBottomDiv>
        <TextBadge
          text={playerInfoList.p1Info.playerInfo.pname}
          backgroundColor={colors.blue}
          color={colors.white}
        />
        <TextBadge
          text={playerInfoList.p2Info.playerInfo.pname}
          backgroundColor={colors.orange}
          color={colors.white}
        />
        <TextBadge
          text={`νκ· μΉ`}
          backgroundColor={colors.green}
          color={colors.white}
        />
        <ButtonType1 text={curScreen ? `κ·Έλν` : `ν`} onClick={handleClick} />
      </CompareBottomDiv>
    </CompareDiv>
  ) : (
    <div align="center">
      <img src="images/Spinner.gif" />
    </div>
  );
};

export const CompareDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  width: 98%;
  margin: 0 auto;
  color: ${colors.white};
  & > button {
    margin-top: 20px;
  }
`;

export const CompareModalSetDiv = styled.div`
  display:flex;
  justify-content: flex-start;
`

export const CompareTopDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 200px;
  color: ${colors.red};
`;

const CompareContentDiv = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 300px);
  overflow-y: scroll;
  border: 1px solid ${colors.gray};
`;

export const CompareContentGraphDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 300px);
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid ${colors.gray};
`;

export const CompareBottomDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  color: ${colors.red};
  & > :nth-child(n) {
    margin-left: 20px;
    margin-right: 0;
  }
`;

export default ComparePage;
