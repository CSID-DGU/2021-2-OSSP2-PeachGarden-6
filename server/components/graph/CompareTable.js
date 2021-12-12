import { memo } from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const CompareTable = ({ keys, data }) => (
  console.log(data[0]),
  <CompareTableTable>
    <tr></tr>
    <CompareTableRow>
      <CompareTableData style={{ color: colors.black}}>{data[0]}</CompareTableData>
      <CompareTableData style={{ color: data[2] }}>{data[1]}</CompareTableData>
      <CompareTableData style={{ color: data[4] }}>{data[3]}</CompareTableData>
    </CompareTableRow>
  </CompareTableTable>
);


const CompareTableTable = styled.table`
  width: 100%;
  margin-top: 10px;
  text-align: center;
  background-color: ${colors.white};
  font-size: 18px;
`;

const CompareTableRow = styled.tr``;

const CompareTableData = styled.td`
  width: 200px;
  height: 40px;
`;

export default memo(CompareTable);