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

const ComparePage = () => {
  const [selectedPlayer, setSelectedPlayer] =
    useRecoilState(selectedPlayerState);

  const [playerInfoList, setPlayerInfoList] = useState([]);
  // curScreen:
  //  true: 표
  //  false: 그래프
  const [curScreen, setCurScreen] = useState(true);

  useMemo(async () => {
    if (selectedPlayer.length !== 2) {
      root.close();
    } else {
      let result = [];
      for await (const item of selectedPlayer) {
        await axios
          .get(urlSet.compare + `?a=a${item.id ? `&pid=${item.id}` : ``}`)
          .then(({ data: { data } }) => {
            result.push(data);
          })
          .catch((e) => {
            console.error(e);
          });
      }
      setPlayerInfoList(result);
    }
  }, []);

  const handleClick = useCallback(() => {
    setCurScreen(!curScreen);
  }, [curScreen]);

  return (
    playerInfoList.length === 2 && (
      <CompareDiv>
        <CompareTopDiv>
          <ProfileModal data={playerInfoList[0]} />
          <h1>VS</h1>
          <ProfileModal data={playerInfoList[1]} />
        </CompareTopDiv>
        )
        {curScreen ? (
          <CompareContentDiv>
            <StatisticTable />
          </CompareContentDiv>
        ) : (
          <CompareContentGraphDiv>
            <StatisticGraph data={playerInfoList} />
          </CompareContentGraphDiv>
        )}
        <CompareBottomDiv>
          <TextBadge
            text={playerInfoList[0].playerInfo.pname}
            backgroundColor={colors.blue}
            color={colors.white}
          />
          <TextBadge
            text={playerInfoList[1].playerInfo.pname}
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

const CompareDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  width: 98%;
  height: 100vh;
  margin: 0 auto;
  color: ${colors.white};
  & > button {
    margin-top: 20px;
  }
`;

const CompareTopDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 300px;
  color: ${colors.red};
`;

const CompareContentDiv = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 400px);
  overflow-y: scroll;
  border: 1px solid ${colors.gray};
`;

const CompareContentGraphDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 400px);
  overflow-y: scroll;
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
  }
`;

export default ComparePage;