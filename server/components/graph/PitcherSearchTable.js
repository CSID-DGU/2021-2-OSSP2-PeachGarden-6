import { useCallback } from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import ToggleButton from "../Button/ToggleButton";

const COLUMN_LIST = [
  "",
  "이름",
  "WAR",
  "G",
  "승",
  "패",
  "홀드",
  "세이브",
  "이닝",
  "탈삼진",
  "ERA",
  "WHIP",
];

const PitcherSearchTable = ({ data }) => {
  const handleClick = useCallback(() => {
    console.log("클릭함");
  }, []);
  return (
    <BasicTableTable>
      <BasicTableColumn columnList={COLUMN_LIST} />
      {data && data.length > 0 && <BasicTableBody data={data} handleClick={handleClick} />}
    </BasicTableTable>
  );
};

const BasicTableTable = styled.table`
  width: 100%;
  height: 400px;
  margin-top: 20px;
  background-color: ${colors.white};
  border-collapse: collapse;
`;

const BasicTableColumn = ({ columnList }) => {
  return (
    <BasicTableHead>
      <BasicTableRow>
        {columnList.map((item, index) => (
          <>
            <BasicTableData key={index}>{item}</BasicTableData>
          </>
        ))}
      </BasicTableRow>
    </BasicTableHead>
  );
};

const BasicTableBody = ({ data, handleClick }) => {
  return (
    console.log("check", data),
    <BasicTableBodyBody>
      {data&&data.map(({ pname, war, playerGames, wins, loses, hld, sv, ip, so, era, whip }, index) => (
        <BasicTableRow>
          <BasicTableData>
            <ToggleButton onClick={handleClick} />
          </BasicTableData>
          <BasicTableData>{pname}</BasicTableData>
          <BasicTableData>{war}</BasicTableData>
          <BasicTableData>{playerGames}</BasicTableData>
          <BasicTableData>{wins}</BasicTableData>
          <BasicTableData>{loses}</BasicTableData>
          <BasicTableData>{hld}</BasicTableData>
          <BasicTableData>{sv}</BasicTableData>
          <BasicTableData>{ip}</BasicTableData>
          <BasicTableData>{so}</BasicTableData>
          <BasicTableData>{era}</BasicTableData>
          <BasicTableData>{whip}</BasicTableData>
        </BasicTableRow>
      ))}
    </BasicTableBodyBody>
  );
};

const BasicTableHead = styled.thead`
  width: 100%;
`;
const BasicTableBodyBody = styled.tbody`
  width: 100%;
`;

const BasicTableRow = styled.tr``;

const BasicTableData = styled.td`
  width: 100px;
  height: 40px;
  border: 2px solid ${colors.black};
  border-left : none;
  border-right: none;
  text-align: center;
`;

export default PitcherSearchTable;
