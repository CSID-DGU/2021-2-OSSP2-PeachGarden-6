import { memo } from "react"
import styled from "styled-components";
import { colors } from "../../constants/colors";

const ButtonType1 = ({text, onClick}) => {
  return (
    <ButtonType1Button onClick={onClick}>
      {text}
    </ButtonType1Button>
  );
}

const ButtonType1Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: ${colors.main};
  color: ${colors.white};
  font-weight: bold;
  font-size: 15px;
  margin: 0;
  border-radius: 5px;
`;

export default memo(ButtonType1);