import { memo } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import { colors } from "../constants/colors";

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderTitleDiv>PLAYER - BATTLE</HeaderTitleDiv>
      <Navigation />
    </HeaderDiv>
  );
};
export default memo(Header);

const HeaderDiv = styled.div`
  z-index: 100;
  top: 0;
  position: fixed;
  width: 100%;
  background-color: ${colors.main};
`;

const HeaderTitleDiv = styled.div`
  width: 100%;
  font-size: 18px;
  padding: 20px 0;
  text-align: center;
  color: #ffffff;
`;
