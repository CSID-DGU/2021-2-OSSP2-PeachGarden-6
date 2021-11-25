import styled from "styled-components";
import { colors } from "../../constants/colors";

const ToggleButton = ({isSelected, onClick}) => {
  return (
    <ToggleButtonButton onClick={onClick} isCheck={isSelected}/>
  );
}

const ToggleButtonButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: unset;
  border: 2px solid ${colors.gray};
  border-radius: 5px;
`;

export default ToggleButton;