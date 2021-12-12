import { memo } from "react";
import styled from "styled-components";

const MainBadge = ({text, color, backgroundColor}) => {
  return (
    <MainBadgeP style={{color: color, backgroundColor: backgroundColor}}>
      {text}
    </MainBadgeP>
  );
};

const MainBadgeP = styled.p`
  font-size: 15px;
  padding: 7.5px 30px;
  border-radius: 5px;
  text-align: center;
  width: 85%;
  margin: 0 auto;
`;

export default memo(MainBadge);