import { useCallback } from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import ToggleButton from "../Button/ToggleButton";

const COLUMN_LIST = [
  "",
  "이름",
  "WAR",
  "타율",
  "홈런",
  "도루",
  "타점",
  "출루율",
  "장타율",
  "OPS",
];

const SearchTable = ({ data }) => {
  const handleClick = useCallback(() => {
    console.log("클릭함");
  }, []);
  return (
    <BasicTableTable>
      <BasicTableColumn columnList={COLUMN_LIST} />
      {data && <BasicTableBody data={data} handleClick={handleClick} />}
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
    <BasicTableBodyBody>
      {data.map(({ name, war, avg, hr, sb, rbi, obp, slg, ops }, index) => (
        <BasicTableRow>
          <BasicTableData>
            <ToggleButton onClick={handleClick} />
          </BasicTableData>
          <BasicTableData>{name}</BasicTableData>
          <BasicTableData>{war}</BasicTableData>
          <BasicTableData>{avg}</BasicTableData>
          <BasicTableData>{hr}</BasicTableData>
          <BasicTableData>{sb}</BasicTableData>
          <BasicTableData>{rbi}</BasicTableData>
          <BasicTableData>{obp}</BasicTableData>
          <BasicTableData>{slg}</BasicTableData>
          <BasicTableData>{ops}</BasicTableData>
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

export default SearchTable;
