import { memo, useCallback } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { selectedPlayerState } from "../../recoil/search";

const PlayerBagde = ({ data }) => {
  const [selectedPlayer, setSelectedPlayer] =
    useRecoilState(selectedPlayerState);

  const onClick = useCallback(() => {
    setSelectedPlayer(
      selectedPlayer.filter((item, index) => item.id !== data.id)
    );
  }, [selectedPlayer]);
  return (
    <Maindiv>
      <p>{data.name}</p>
      <button onClick={onClick}>X</button>
    </Maindiv>
  );
};

const Maindiv = styled.div`
  width: 100px;
  text-align: center;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  background-color: ${colors.gray};
  font-size: 13px;
  color: ${colors.white};
  display: flex;
  align-items: center;
  & > p {
    margin: 0 auto;
  }
  & > button {
    background-color: ${colors.mainFaded};
    color: ${colors.white};
    border: unset;
    border-radius: 2px;
    &:hover {
      background-color: ${colors.lightgray};
      color: ${colors.black};
    }
  }
`;

export default memo(PlayerBagde);
