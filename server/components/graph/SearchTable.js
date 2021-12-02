import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { selectedPlayerState } from "../../recoil/search";
import { valueExtractor } from "../../utils/functions";
import ToggleButton from "../Button/ToggleButton";
import root from "window-or-global";

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

const HitterSearchTable = ({ data }) => {
  return (
    <BasicTableTable>
      <BasicTableColumn columnList={COLUMN_LIST} />
      {data && data.length > 0 && <BasicTableBody data={data} />}
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

const BasicTableBody = ({ data }) => {
  const [selectedPlayer, setSelectedPlayer] =
    useRecoilState(selectedPlayerState);

  const onClick = (pid) => {
    if (
      valueExtractor({
        data: selectedPlayer,
        key: "id",
      }).includes(pid)
    ) {
      // 제거
      setSelectedPlayer(
        selectedPlayer.filter((item, index2) => item.id !== pid)
      );
    } else {
      // 추가
      if (selectedPlayer.length === 2) {
        root.alert("선수 비교는 최대 2인까지만 가능합니다!\n우측 리스트를 확인해주세요!");
        return;
      }
      let target = data.filter((item, index) => item.pid === pid)[0];
      setSelectedPlayer([
        ...selectedPlayer,
        { name: target.pname, id: target.pid },
      ]);
    }
  };

  const openPlayerStat = useCallback((pid) => {
    root.open(`/single?pid=${pid}`, `comparePopup`, `toolbar=no, menubar=no, location=no, status=no, resizable=no, fullscreen=no, width=1000, height=900`, false);
  }, []);

  return (
    <BasicTableBodyBody>
      {data &&
        data.map(
          ({ pname, war, hitAvg, hr, sb, rbi, obp, slg, ops, pid }, index) => (
            <BasicTableRow>
              <BasicTableData>
                <ToggleButton
                  onClick={() => onClick(pid)}
                  isSelected={valueExtractor({
                    data: selectedPlayer,
                    key: "id",
                  }).includes(pid)}
                />
              </BasicTableData>
              <BasicTableData><TextButton onClick={() => openPlayerStat(pid)}>{pname}</TextButton></BasicTableData>
              <BasicTableData>{war}</BasicTableData>
              <BasicTableData>{hitAvg}</BasicTableData>
              <BasicTableData>{hr}</BasicTableData>
              <BasicTableData>{sb}</BasicTableData>
              <BasicTableData>{rbi}</BasicTableData>
              <BasicTableData>{obp}</BasicTableData>
              <BasicTableData>{slg}</BasicTableData>
              <BasicTableData>{ops}</BasicTableData>
            </BasicTableRow>
          )
        )}
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
  border-left: none;
  border-right: none;
  text-align: center;
`;

const TextButton = styled.button`
  background-color: unset;
  border: unset;
  color: ${colors.black};
  font-weight: bold;
  font-size: 15px;
`;

export default HitterSearchTable;
