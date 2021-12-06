import { memo } from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { convertHitterStat, convertPitcherStat } from "../../utils/ConvertStatInfo";

const ProfileModal = ({ data, side }) => {
  const { playerInfo, bestInfo, worstInfo, statInfo, styleInfo } = data;
  const { pname, birth, shortName} = playerInfo;
  let playerPosRender = 'P';
  // if ('ops' in statInfo){
  //   const { playerPos } = playerInfo;
  //   playerPosRender = playerPos;
  //   convertHitterStat(statInfo);
  // }
  // else{
  //   convertPitcherStat(statInfo);
  // }
  
  const styles = Object.values(styleInfo);
  
  return (
    <MainDiv>
      <SideCardDiv style={{backgroundColor: side==='R'?colors.orange:colors.blue}}/>
      <SideMainDiv>
        <p style={{color: side==='R'?colors.orange:colors.blue}}>{pname}</p>
        <div>
          <p>생년월일: {birth}</p>
          <p>포지션: {playerPosRender}</p>
          <p>소속: {shortName}</p>
          <p>칭호: {}</p>
          <p>Best: {bestInfo.count} | Worst: {worstInfo.count}</p>
        </div>
      </SideMainDiv>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  display: flex;
  width: 300px;
  border: 1.5px solid ${colors.gray};
`;

const SideCardDiv = styled.div`
  width: 50px;
`;

const SideMainDiv = styled.div`
  width: 250px;
  height: 100%;
  color: ${colors.black};
  background-color: ${colors.white};
  font-size: 12px;
  font-weight: 500;
  & > :first-child {
    margin: 0;
    width: calc(100% - 20px);
    padding: 10px;
    border-bottom: 1px solid ${colors.gray};
    font-size: 14px;
    font-weight: bold;
  }
  & > div {
    display: flex;
    width: calc(100% - 20px);
    padding: 10px;
    flex-direction: column;
    gap: 10px;
    & > :nth-child(n) {
      margin: 0;
    }
  }
`;

export default memo(ProfileModal);
