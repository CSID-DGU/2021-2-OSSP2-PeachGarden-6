import { colors } from "../../constants/colors";
const { default: styled } = require("styled-components");

export const StyleBadge = ({ side, text }) => {
  return (
    <StyleBadgeDiv style={{ backgroundColor: side === 'R' ? colors.orange : colors.blue }}>
      <p>{text}</p>
    </StyleBadgeDiv>
  );
}

const StyleBadgeDiv = styled.div`
  border: 1px solid ${colors.white};
  text-align: center;
  border-radius: 5px;
  & > p {
    font-size: 11px;
    padding: 0px 10px;
  }
`;  