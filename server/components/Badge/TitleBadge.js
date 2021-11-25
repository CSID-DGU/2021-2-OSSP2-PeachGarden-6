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
  width: 200px;
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
  color: ${colors.black};
  background-color: ${colors.main};
`;
export default memo(TitleBadge);