import TitleBadge from "../Badge/TitleBadge";
import StyleTable from "../graph/StyleTable";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const StyleSection = ({ columnList, parentIndex, data, pageType }) => {
  return (
    <StyleSectionDiv>
      <StyleTable columnList={columnList} parentIndex={parentIndex} data={data} />
    </StyleSectionDiv>
  )
};

export const StyleSectionDiv = styled.div`
  width: 100%;
  height: 600px;
  background-color: ${colors.white};
`;

export default StyleSection;
