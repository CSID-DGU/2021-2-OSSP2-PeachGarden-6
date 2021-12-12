import { memo } from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const CompareTable = ({ columnList, parentIndex, dummyCounter, data }) => {
  console.log(data);
  return (
    <CompareTableTable>
      <CompareTableColumn columnList={columnList} parentIndex={parentIndex} />
      {data && <CompareTableBody dummyCounter={dummyCounter} data={data} />}
    </CompareTableTable>
  );
};

const CompareTableTable = styled.table`
  width: 100%;
  margin-top: 10px;
  text-align: center;
  border-collapse: collapse;
  background-color: ${colors.white};
  font-size: 16px;
`;

const CompareTableColumn = ({ columnList, parentIndex }) => {
  let temp = '';
  columnList.splice(2, 1);
  columnList.unshift(temp);
  let newList = columnList.concat(columnList, columnList);
  return (
    <CompareTableHead>
      <CompareTableRow>
        {newList.map((item, index) => (
          <>
            <CompareTableData key={parentIndex + index}>{item}</CompareTableData>
          </>
        ))}
      </CompareTableRow>
    </CompareTableHead>
  );
};

const CompareTableBody = ({ dummyCounter, data }) => {
  const p1Stat = data.p1Info.statInfo;
  const p2Stat = data.p2Info.statInfo;
  return (
    <>
      <CompareTableBodyBody>
        {dummyCounter.map((item, index) => {
          if (index % 3 === 0) {
            return (
              <CompareTableRow>
              <CompareTableData style={{backgroundColor:colors.main}}>{dummyCounter[index]}</CompareTableData>
              <CompareTableData style={{color: p1Stat[dummyCounter[index]] > p2Stat[dummyCounter[index]] ? `red` : `black` }}>{p1Stat[dummyCounter[index]]}</CompareTableData>
              <CompareTableData style={{color: p1Stat[dummyCounter[index]] > p2Stat[dummyCounter[index]] ? `black` : p1Stat[dummyCounter[index]] === p2Stat[dummyCounter[index]] ? `black` : `red` }}>{p2Stat[dummyCounter[index]]}</CompareTableData>
              <CompareTableData style={{backgroundColor:colors.main}}>{dummyCounter[index+1]}</CompareTableData>
              <CompareTableData style={{color: p1Stat[dummyCounter[index+1]] > p2Stat[dummyCounter[index+1]] ? `red` : `black` }}>{p1Stat[dummyCounter[index+1]]}</CompareTableData>
              <CompareTableData style={{color: p1Stat[dummyCounter[index+1]] > p2Stat[dummyCounter[index+1]] ? `black` : p1Stat[dummyCounter[index+1]] === p2Stat[dummyCounter[index+1]] ? `black` : `red` }}>{p2Stat[dummyCounter[index+1]]}</CompareTableData>
              <CompareTableData style={{backgroundColor:colors.main}}>{dummyCounter[index+2]}</CompareTableData>
              <CompareTableData style={{color: p1Stat[dummyCounter[index+2]] > p2Stat[dummyCounter[index+2]] ? `red` : `black` }}>{p1Stat[dummyCounter[index+2]]}</CompareTableData>
              <CompareTableData style={{color: p1Stat[dummyCounter[index+2]] > p2Stat[dummyCounter[index+2]] ? `black` : p1Stat[dummyCounter[index+2]] === p2Stat[dummyCounter[index+2]] ? `black` : `red` }}>{p2Stat[dummyCounter[index+2]]}</CompareTableData>
            </CompareTableRow>
            )
          }
        }
        )}
      </CompareTableBodyBody>
    </>
  );
};

const CompareTableHead = styled.thead`
  width: 100%;
  background-color: ${colors.main};
`;
const CompareTableBodyBody = styled.tbody`
  width: 100%;
`;

const CompareTableRow = styled.tr``;

const CompareTableData = styled.td`
  width: 100px;
  height: 40px;
  color: black;
  border: 2px solid ${colors.black};
  table-layout: fixed;
`;

export default memo(CompareTable);