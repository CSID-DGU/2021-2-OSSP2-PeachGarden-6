import styled from "styled-components";
import { colors } from "../../constants/colors";

const StyleTable = ({ columnList, parentIndex, data }) => {
  return (
    <StyleTableTable>
      <StyleTableColumn columnList={columnList} parentIndex={parentIndex} />
      {data && <StyleTableBody data={data} />}
    </StyleTableTable>
  );
};

const StyleTableTable = styled.table`
  width: 100%;
  height: 400px;
  margin-top: 20px;
  border-collapse: collapse;
  background-color: ${colors.white};
`;

const StyleTableColumn = ({ columnList, parentIndex }) => {
  return (
    <StyleTableHead>
      <StyleTableRow>
        {columnList.map((item, index) => (
          <>
            <StyleTableData key={parentIndex + index}>{item}</StyleTableData>
          </>
        ))}
      </StyleTableRow>
    </StyleTableHead>
  );
};

const StyleTableBody = ({ data }) => {
  return (
    <StyleTableBodyBody>
      {data.map(({ sname, script }, index) => (
        <StyleTableRow>
          <StyleTableTitle>{sname}</StyleTableTitle>
          <StyleTableData>{script}</StyleTableData>
        </StyleTableRow>
      ))}
    </StyleTableBodyBody>
  );
};

const StyleTableHead = styled.thead`
  width: 100%;
  background-color: ${colors.main};
  color: ${colors.white};
  border : solid 2px;
`;
const StyleTableBodyBody = styled.tbody`
  width: 100%;
`;

const StyleTableRow = styled.tr``;

const StyleTableTitle = styled.td`
  width: 30% auto;
  height: 40px;
  border: 2px solid ${colors.black};
  text-align: center;
`;

const StyleTableData = styled.td`
  width: 70% auto;
  height: 40px;
  border: 2px solid ${colors.black};
  text-align: center;
`;

export default StyleTable;
