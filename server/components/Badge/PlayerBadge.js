import { memo } from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const PlayerBagde = ({ data }) => {
  return <Maindiv>{data.name}</Maindiv>;
};

const Maindiv = styled.div`
  width: 100px;
  text-align: center;
  padding: 10px 0;
  margin: 5px 0;
  border-radius: 5px;
  background-color: ${colors.gray};
  font-size: 13px;
  color: ${colors.white};
`;

export default memo(PlayerBagde);
