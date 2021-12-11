import { memo, useMemo, useState } from "react"
import styled from "styled-components";
import { colors } from "../../constants/colors";

const StatisticTable = ( {data, type} ) => {
  const [statInfoList, setStatInfoList] = useState([]);
  const [nameList, setNameList] = useState([]);
  const [dummyCounter, setDummyCounter] = useState([]);
  console.log(type);
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

  return (
    <>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    <p>표</p>
    </>
  )
}
export default memo(StatisticTable);