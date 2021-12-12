import { memo, useMemo, useState } from "react"
import styled from "styled-components";
import { colors } from "../../constants/colors";
import CompareTable from "./CompareTable";
import TextBadge from "../Badge/TextBadge";

const StatisticTable = ({ data, type }) => {
  const [statInfoList, setStatInfoList] = useState([]);
  const [nameList, setNameList] = useState([]);
  const [dummyCounter, setDummyCounter] = useState([]);

  useMemo(() => {
    if (data) {
      switch (type) {
        case "compare":
          setStatInfoList([
            data.p1Info.statInfo,
            data.p2Info.statInfo,
            data.avgInfo.statInfo,
          ]);
          setNameList([
            data.p1Info.playerInfo.pname,
            data.p2Info.playerInfo.pname,
            "평균",
          ]);
          break;
        case "single":
          setStatInfoList([data.p1Info.statInfo, data.avgInfo.statInfo]);
          setNameList([data.p1Info.playerInfo.pname, "평균"]);
          break;
        default:
          break;
      }
    }
  }, [data, type]);

  useMemo(() => {
    if (statInfoList.length !== 0) {
      setDummyCounter(Object.keys(statInfoList[0]));
    }
  }, [statInfoList, type]);
  console.log(dummyCounter);
  return (
    <>
      <CompareTable
        columnList={nameList}
        parentIndex={'1'}
        dummyCounter={dummyCounter}
        data={
          type === "compare"
            ? data
            : type === "single"
              ? [
                // {
                //   country: dummyCounter[index + item],
                //   [nameList[0]]:
                //     statInfoList[0][dummyCounter[index + item]],
                //   [nameList[0] + "Color"]: colors.blue,
                //   [nameList[1]]:
                //     statInfoList[1][dummyCounter[index + item]],
                //   [nameList[1] + "Color"]: colors.orange,
                // },
              ]
              : null
        }
      />
    </>
  )
}

const RowContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 2px solid gray;
  align-items: center;
  & > div {
    display: flex;
    width: 80%;
    & > :first-child {
      width: 100%;
      align-self: center;
    }
    & > :last-child {
    }
  }
`;

export default memo(StatisticTable);