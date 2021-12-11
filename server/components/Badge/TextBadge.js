import { memo } from "react";
import styled from "styled-components";

const TextBadge = ({text, color, backgroundColor}) => {
  return (
    <TextBadgeP style={{color: color, backgroundColor: backgroundColor}}>
      {text}
    </TextBadgeP>
  );
};

const TextBadgeP = styled.p`
  font-size: 15px;
  padding: 7.5px 30px;
  border-radius: 5px;
  text-align: center;
  width: 86%;
  margin: 0 auto;
`;

export default memo(TextBadge);