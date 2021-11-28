import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { selectedPlayerState } from "../../recoil/search";
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
  const [selectedIndex, setSelectedIndex] = useState([]);
  const [selectedPlayer, setSelectedPlayer] =
    useRecoilState(selectedPlayerState);

  useEffect(() => {
    let container = [];
    let targetIndexes = selectedPlayer.map((item, index) => item.id);
    data.map((item, index) => {if(targetIndexes.includes(item.pid)) container.push(index)});
    setSelectedIndex(container);
  }, [data]);

  const onClick = (index) => {
    if (selectedIndex.includes(index)) {
      setSelectedIndex(selectedIndex.filter((item) => item !== index));
      setSelectedPlayer(
        selectedPlayer.filter((item, index2) => item.id !== data[index].pid)
      );
    } else {
      if (selectedIndex.length < 2) {
        setSelectedIndex([...selectedIndex, index]);
        selectedPlayer.map((item, index) => {
          console.log(item);
          console.log(data[index].pid);
          if (item.id === data[index].pid) {
            return ;
          }
        })
        setSelectedPlayer([
          ...selectedPlayer,
          {
            name: data[index].pname,
            id: data[index].pid,
          },
        ]);
      } else {
        setSelectedIndex([selectedIndex[1], index]);
        selectedPlayer.map((item, index) => {
          if (item.id === data[index].pid) {
            return ;
          }
        })
        if (selectedPlayer.length < 2) {
          setSelectedPlayer([
            ...selectedPlayer,
            {
              name: data[index].pname,
              id: data[index].pid,
            },
          ]);
        } else {
          setSelectedPlayer([
            selectedPlayer[1],
            {
              name: data[index].pname,
              id: data[index].pid,
            },
          ]);
        }
      }
    }
  };

  return (
    <BasicTableBodyBody>
      {data &&
        data.map(
          ({ pname, war, hitAvg, hr, sb, rbi, obp, slg, ops }, index) => (
            <BasicTableRow>
              <BasicTableData>
                <ToggleButton
                  onClick={() => onClick(index)}
                  isSelected={selectedIndex.includes(index)}
                />
              </BasicTableData>
              <BasicTableData>{pname}</BasicTableData>
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

export default HitterSearchTable;
