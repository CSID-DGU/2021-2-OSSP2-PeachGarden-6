import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import ProfileModal from "../components/Modal/ProfileModal";
import { colors } from "../constants/colors";
import { urlSet } from "../constants/urls";
import { selectedPlayerState } from "../recoil/search";
import root from "window-or-global";
import ButtonType1 from "../components/Button/ButtonType1";
import StatisticGraph from "../components/graph/StatisticGraph";
import StatisticTable from "../components/graph/StatisticTable";
import TextBadge from "../components/Badge/TextBadge";
import { valueExtractor } from "../utils/functions";
import { convertHitterStat, convertPitcherStat } from "../utils/ConvertStatInfo";

const ComparePage = () => {
  const [selectedPlayer, setSelectedPlayer] =
    useRecoilState(selectedPlayerState);

  const [playerInfoList, setPlayerInfoList] = useState(null);
  // curScreen:
  //  true: 표
  //  false: 그래프
  const [curScreen, setCurScreen] = useState(true);

  useMemo(async () => {
    if (selectedPlayer.length !== 2) {
      root.close();
    } else {
      const pidList = valueExtractor({ data: selectedPlayer, key: `id` });
      await axios
        .get(urlSet.compare + `?a=a${pidList ? `&pidL=${pidList[0]}&pidR=${pidList[1]}` : ``}`)
        .then(({ data: { data } }) => {
          if ('ops' in data.avgInfo.statInfo) {
            convertHitterStat(data.avgInfo.statInfo);
          }
          else{
            convertPitcherStat(data.avgInfo.statInfo);
          }
          setPlayerInfoList(data);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, []);

  const handleClick = useCallback(() => {
    setCurScreen(!curScreen);
  }, [curScreen]);

  return (
    playerInfoList && (
      <CompareDiv>
        <CompareTopDiv>
          <ProfileModal side={"L"} data={playerInfoList.p1Info} />
          <h1>VS</h1>
          <ProfileModal side={"R"} data={playerInfoList.p2Info} />
        </CompareTopDiv>
        )
        {curScreen ? (
          <CompareContentDiv>
            <StatisticTable />
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
          <ButtonType1
            text={curScreen ? `그래프` : `표`}
            onClick={handleClick}
          />
        </CompareBottomDiv>
      </CompareDiv>
    )
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
  height: calc(100vh - 400px);
  overflow-y: scroll;
  border: 1px solid ${colors.gray};
`;

export const CompareContentGraphDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 400px);
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid ${colors.gray};
`;

const CompareBottomDiv = styled.div`
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
