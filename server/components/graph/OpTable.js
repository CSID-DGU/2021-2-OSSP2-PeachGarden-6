import styled from "styled-components";
import { colors } from "../../constants/colors";

const OpTable = ({ columnList, parentIndex, data }) => {
  return (
    <OpTableTable>
      <OpTableColumn columnList={columnList} parentIndex={parentIndex} />
      {data && <OpTableBody data={data} />}
    </OpTableTable>
  );
};

const OpTableTable = styled.table`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  border-collapse: collapse;
  background-color: ${colors.white};
  table-layout: fixed;
`;

const OpTableColumn = ({ columnList, parentIndex }) => {
  return (
    <OpTableHead>
      <OpTableRow>
        {columnList.map((item, index) => (
          <>
            <OpTableData key={parentIndex + index}>{item}</OpTableData>
          </>
        ))}
      </OpTableRow>
    </OpTableHead>
  );
};

const OpTableBody = ({ data }) => {
  return (
    <OpTableBodyBody>
      {data.map(({ title, list }, index) => (
        <OpTableRow>
          <OpTableTitle>{title}</OpTableTitle>
          {list.map((item, index) => (
            <OpTableData style = {{color: item > 0.6? "red": item > 0.4? "black" : item === 0? "black": "blue"}}>{item}</OpTableData>
          ))}
        </OpTableRow>
      ))}
    </OpTableBodyBody>
  );
};

const OpTableHead = styled.thead`
  width: 100%;
  background-color: ${colors.main};
  color: ${colors.white};
  border : solid 2px;
`;
const OpTableBodyBody = styled.tbody`
  width: 100%;
`;

const OpTableRow = styled.tr``;

const OpTableTitle = styled.td`
  width: 30% auto;
  height: 40px;
  border: 2px solid ${colors.black};
  text-align: center;
`;

const OpTableData = styled.td`
  width: 70% auto;
  height: 40px;
  border: 2px solid ${colors.black};
  text-align: center;
`;

export default OpTable;
