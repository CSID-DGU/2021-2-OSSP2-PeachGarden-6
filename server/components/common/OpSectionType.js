import OpTable from "../graph/OpTable";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const OpSection = ({ columnList, parentIndex, data }) => {
  return (
    <OpSectionDiv>
      <OpTable columnList={columnList} parentIndex={parentIndex} data={data} />
    </OpSectionDiv>
  )
};

export const OpSectionDiv = styled.div`
  width: 100%;
  height: 600px;
  background-color: ${colors.white};
`;

export default OpSection;
