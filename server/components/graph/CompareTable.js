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
  var indexList = [];
  dummyCounter.includes('타점') ? indexList = ['WAR','홈런','희타','G','타점','타율','타석','도루','출루','타수','도실','장타','득점','볼넷','OPS','안타','사구','woba','2타','삼진','WRC+','3타','병살'] 
  : indexList = ['WAR','실점','이닝','G','탈삼진','ERA','선발','볼넷','ERA+','완투','사구','FIP','완봉','고의사구','FIP+','승','피안타','WHIP','패','피2타','보크','홀드','피3타','폭투','세이브','피홈런','실책'];
  return (
    <>
      <CompareTableBodyBody>
        {dummyCounter.map((item, index) => {
          if (index % 3 === 0) {
            return (
              <CompareTableRow>
              <CompareTableData style={{backgroundColor:colors.main}}>{indexList[index]}</CompareTableData>
              <CompareTableData style={{color: p1Stat[indexList[index]] > p2Stat[indexList[index]] ? `red` : `black` }}>{p1Stat[indexList[index]]}</CompareTableData>
              <CompareTableData style={{color: p1Stat[indexList[index]] > p2Stat[indexList[index]] ? `black` : p1Stat[indexList[index]] === p2Stat[indexList[index]] ? `black` : `red` }}>{p2Stat[indexList[index]]}</CompareTableData>
              <CompareTableData style={{backgroundColor:colors.main}}>{indexList[index+1]}</CompareTableData>
              <CompareTableData style={{color: p1Stat[indexList[index+1]] > p2Stat[indexList[index+1]] ? `red` : `black` }}>{p1Stat[indexList[index+1]]}</CompareTableData>
              <CompareTableData style={{color: p1Stat[indexList[index+1]] > p2Stat[indexList[index+1]] ? `black` : p1Stat[indexList[index+1]] === p2Stat[indexList[index+1]] ? `black` : `red` }}>{p2Stat[indexList[index+1]]}</CompareTableData>
              <CompareTableData style={{backgroundColor:colors.main}}>{indexList[index+2]}</CompareTableData>
              <CompareTableData style={{color: indexList[index+2] === 'ERA' ? p1Stat[indexList[index+2]] < p2Stat[indexList[index+2]] ? `red` : `black` 
                                        : p1Stat[indexList[index+2]] < p2Stat[indexList[index+2]] ? `black` 
                                        : p1Stat[indexList[index+2]] === p2Stat[indexList[index+2]] ? `black` : `red` }}>{p1Stat[indexList[index+2]]}</CompareTableData>
              <CompareTableData style={{color: indexList[index+2] === 'ERA' ? p1Stat[indexList[index+2]] < p2Stat[indexList[index+2]] ? `black` : `red` 
                                        : p1Stat[indexList[index+2]] > p2Stat[indexList[index+2]] ? `black` 
                                        : p1Stat[indexList[index+2]] === p2Stat[indexList[index+2]] ? `black` : `red` }}>{p2Stat[indexList[index+2]]}</CompareTableData>
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