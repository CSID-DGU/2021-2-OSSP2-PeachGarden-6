import { memo } from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const OptionBadge = ({text}) => {
  return (
    <OptionBadgeDiv>
      {text}
    </OptionBadgeDiv>
  );
}

const OptionBadgeDiv = styled.div`
  width: 200px;
  padding: 15px 0;
  font-size: 15px;
  color: ${colors.black};
  background-color: ${colors.lightgray};
  border: 1px solid ${colors.white};
  border-radius : 5px;
`;

export default memo(OptionBadge);