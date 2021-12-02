import styled from "styled-components";
import { colors } from "../../constants/colors";

const BasicTable = ({ columnList, parentIndex, data }) => {
  return (
    <BasicTableTable>
      <BasicTableColumn columnList={columnList} parentIndex={parentIndex} />
      {data && <BasicTableBody data={data} />}
    </BasicTableTable>
  );
};

const BasicTableTable = styled.table`
  width: 100%;
  height: 400px;
  margin-top: 10px;
  text-align: center;
  border-collapse: collapse;
  background-color: ${colors.white};
`;

const BasicTableColumn = ({ columnList, parentIndex }) => {
  return (
    <BasicTableHead>
      <BasicTableRow>
        {columnList.map((item, index) => (
          <>
            <BasicTableData key={parentIndex + index}>{item}</BasicTableData>
          </>
        ))}
      </BasicTableRow>
    </BasicTableHead>
  );
};

const BasicTableBody = ({ data }) => {
  return (
    <BasicTableBodyBody>
      {data.map(({ title, list }, index) => (
        <BasicTableRow>
          <BasicTableData>{title}</BasicTableData>
          {list.map((item, index) => (
            <BasicTableData>{item}</BasicTableData>
          ))}
        </BasicTableRow>
      ))}
    </BasicTableBodyBody>
  );
};

const BasicTableHead = styled.thead`
  width: 100%;
  background-color: ${colors.main};
`;
const BasicTableBodyBody = styled.tbody`
  width: 100%;
`;

const BasicTableRow = styled.tr``;

const BasicTableData = styled.td`
  width: 100px;
  height: 40px;
  border: 2px solid ${colors.black};
`;

export default BasicTable;
