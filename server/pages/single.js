import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ProfileModal from "../components/Modal/ProfileModal";
import { urlSet } from "../constants/urls";
import root from "window-or-global";
import StatisticGraph from "../components/graph/StatisticGraph";
import { CompareContentGraphDiv, CompareDiv, CompareTopDiv } from "./compare";

const SinglePage = ({ pid }) => {
  const [playerInfo, setPlayerInfo] = useState(null);
  // curScreen:
  //  true: 표
  //  false: 그래프

  useMemo(async () => {
    if (!pid) {
      root.close();
    } else {
      await axios
        .get(urlSet.compare + `?pid=${pid}`)
        .then(({ data: { data } }) => {
          setPlayerInfo(data);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [pid]);

  return (
    playerInfo && (
      <CompareDiv>
        <CompareTopDiv>
          <ProfileModal side={"A"} data={playerInfo} />
        </CompareTopDiv>
        )
        <CompareContentGraphDiv>
          <StatisticGraph type={`single`} data={playerInfo} />
        </CompareContentGraphDiv>
      </CompareDiv>
    )
  );
};

SinglePage.getInitialProps = async (context) => {
  const { pid } = context.query;
  return { pid: pid };
};

export default SinglePage;
