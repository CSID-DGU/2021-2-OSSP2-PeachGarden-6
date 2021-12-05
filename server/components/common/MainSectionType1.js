import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import TitleBadge from "../Badge/TitleBadge";

const MainSectionType1 = ({text}) => {
  return <MainSectionDiv>
    <TitleBadge text={text}/>
    <img src='/images/다운로드.jfif' alt='테스트'/>
  </MainSectionDiv>;
};

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
