import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import TitleBadge from "../Badge/TitleBadge";

const MainSectionType1 = ({text}) => {
  return <MainSectionDiv>
    <TitleBadge text={text}/>
  </MainSectionDiv>;
};

export const MainSectionDiv = styled.div`
  width: 45%;
  height: 600px;
  background-color: ${colors.mainFaded};
`;

export default MainSectionType1;
