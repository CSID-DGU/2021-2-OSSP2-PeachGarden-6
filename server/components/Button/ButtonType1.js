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
  width: 200px;
  height: 40px;
  background-color: ${colors.main};
  color: ${colors.white};
  font-weight: bold;
  font-size: 15px;
`;

export default memo(ButtonType1);