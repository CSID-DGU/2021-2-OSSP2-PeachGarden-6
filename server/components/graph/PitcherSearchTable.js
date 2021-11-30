import { useCallback } from "react";
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
  }, []);
  return (
    <BasicTableTable>
      <BasicTableColumn columnList={COLUMN_LIST} />
      {data && data.length > 0 && (
        <BasicTableBody data={data} handleClick={handleClick} />
      )}
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
        root.alert(
          "선수 비교는 최대 2인까지만 가능합니다!\n우측 리스트를 확인해주세요!"
        );
        return;
      }
      let target = data.filter((item, index) => item.pid === pid)[0];
      setSelectedPlayer([
        ...selectedPlayer,
        { name: target.pname, id: target.pid },
      ]);
    }
  };
  return (
    (
      <BasicTableBodyBody>
        {data &&
          data.map(
            (
              {
                pid,
                pname,
                war,
                playerGames,
                wins,
                loses,
                hld,
                sv,
                ip,
                so,
                era,
                whip,
              },
              index
            ) => (
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
            )
          )}
      </BasicTableBodyBody>
    )
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

export default PitcherSearchTable;
