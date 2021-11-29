import { memo, useCallback } from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import ButtonType1 from "../Button/ButtonType1";
import PlayerBagde from "../Badge/PlayerBadge";
import { useRecoilState } from "recoil";
import { selectedPlayerState } from "../../recoil/search";

const CompareModal = () => {
  const [selectedPlayer, setSelectedPlayer] =
    useRecoilState(selectedPlayerState);

  const cleanSelection = useCallback(() => {
    setSelectedPlayer([]);
  }, [selectedPlayer]);
  return (
    <CompareModalDiv>
      <HeaderDiv>
        <p>선수 비교</p>
        <button onClick={cleanSelection}>비우기</button>
      </HeaderDiv>
      <MainDiv>
        {selectedPlayer.map((item, index) => (
          <PlayerBagde data={item} />
        ))}
      </MainDiv>
      <FotterDiv>
        <ButtonType1 text="비교하기" />
      </FotterDiv>
    </CompareModalDiv>
  );
};

const CompareModalDiv = styled.div`
  position: fixed;
  width: 200px;
  height: 200px;
  top: 300px;
  right: 10px;
  border: 1px solid ${colors.lightgray};
  border-radius: 4px;
  background-color: ${colors.white};
`;

const HeaderDiv = styled.div`
  height: 50px;
  border-bottom: 1px solid ${colors.lightgray};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  & > button {
    background-color: ${colors.mainFaded};
    color: ${colors.white};
    border: unset;
    border-radius: 5px;
    padding: 10px;
    &:hover {
      background-color: ${colors.lightgray};
      color: ${colors.black};
    }
  }
`;

const MainDiv = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FotterDiv = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default memo(CompareModal);
