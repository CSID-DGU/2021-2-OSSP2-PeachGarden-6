import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainSectionType1 from "../components/common/MainSectionType1";
import MainSectionType2 from "../components/common/MainSectionType2";
import { LEADERBOARD_DUMMY_DATA, MAIN_RANK_DUMMY_DATA, TEAM_WAA_DUMMY_DATA } from "../constants/dummy/mainpage";
import { urlSet } from "../constants/urls";

// type:
// 0: 걍 사진
// 1: 그래프
const MAIN_SECTION_LIST = [
  {
    title: "선수 검색",
    type: 0,
  },
  {
    title: "주요 순위",
    type: 1,
    columns: ["항목", "1위", "", "2위", "", "3위", ""],
    data: MAIN_RANK_DUMMY_DATA,
  },
  {
    title: "팀 순위",
    type: 1,
    columns: ["순위", "팀명", "경기수", "승", "패", "무", "승차"],
    data: LEADERBOARD_DUMMY_DATA,
  },
  {
    title: "팀 분석(WAA)",
    type: 1,
    columns: ["팀", "타격", "주루", "수비", "선발", "구원"],
    data: TEAM_WAA_DUMMY_DATA,
  },
];

const Index = () => {
  const [topThreeList, setTopThreeList] = useState([]);
  useEffect(async () => {
    await axios
      .get(urlSet.topThree)
      .then(({ data: { data } }) => {
        if (data) {
          setTopThreeList(data.resultList);
        }
        else {
          setTopThreeList([]);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <MainPageDiv>
      {MAIN_SECTION_LIST.map(({ title, type, columns, data }, index) =>
        type === 0 ? (
          <MainSectionType1 text={title} key={index} />
        ) : (null)
      )}
      <MainSectionType2 text={"주요 순위"} columnList={["항목", "1위", "", "2위", "", "3위", ""]} parentIndex={1} data={topThreeList} key={1} />
    </MainPageDiv>
  );
};

const MainPageDiv = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

export default Index;
