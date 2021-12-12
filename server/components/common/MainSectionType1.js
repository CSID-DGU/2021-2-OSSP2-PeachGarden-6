import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import MainBadge from "../Badge/MainBadge";
import TitleBadge from "../Badge/TitleBadge";

const MainSectionType1 = ({ text }) => {
  return (
    <MainSectionDiv>
      <TitleBadge text={text} />
      <MainImg src="/images/compare_result.png" alt="테스트" />
      <MainBadge text={"투/투, 타/타 비교 서비스 제공!"} color= {colors.white} backgroundColor= {colors.green}/>
    </MainSectionDiv>
  );
};

export const MainImg = styled.img`
  width: 100%;
  margin-top: 30%;
  border: 1px solid;
  object-fit: cover;
`;

export const MainSectionDiv = styled.div`
  width: 45%;
  height: 650px;
  background-color: ${colors.white};
`;

export const MainSectionDiv2 = styled.div`
  width: 45%;
  height: 650px;
  background-color: ${colors.mainFaded};
`;

export default MainSectionType1;
