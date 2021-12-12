import styled from "styled-components";
import { colors } from "../../constants/colors";
import { StyleBadge } from "../Badge/StyleBadge";
import { StyleTitleBadge } from "../Badge/StyleTitleBadge";

export const StyleModal = ({ side, styleList }) => {
  return (
    <div>
      <StyleTitleBadge side={side} text={"칭호"} />
      <StyleModalDiv>
        {styleList.map((item, index) => <StyleBadge side={side} text={item} />)}
      </StyleModalDiv>
    </div>
  );
}

const StyleModalDiv = styled.div`
  width: 100px;
  height: 120px;
  overflow-y: scroll;
  align-items: center;
  color: ${colors.white};
  & ::-webkit-scrollbar {
    width: 2px;
  }
  & ::-webkit-scrollbar-thumb {
    width: 4px;
    background-color: ${colors.black};
  }
  & ::-webkit-scrollbar-track {
    width: 2px;
  }
`;