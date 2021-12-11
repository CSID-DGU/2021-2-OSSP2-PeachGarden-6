import { memo } from "react"
import styled from "styled-components";
import { colors } from "../../constants/colors";

const TitleBadge = ({text}) => {
  return (
    <TitleBadgeDiv>
      {text}
    </TitleBadgeDiv>
  );
}

const TitleBadgeDiv = styled.div`
  width: 100px;
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
  border-radius: 5px;
  color: ${colors.white};
  background-color: ${colors.main};
`;
export default memo(TitleBadge);