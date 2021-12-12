import { memo, useMemo, useState } from "react"
import styled from "styled-components";
import { colors } from "../../constants/colors";
import CompareTable from "./CompareTable";
import TextBadge from "../Badge/TextBadge";

const StatisticTable = ({ data, type }) => {
  const [statInfoList, setStatInfoList] = useState([]);
  const [nameList, setNameList] = useState([]);
  const [dummyCounter, setDummyCounter] = useState([]);
  console.log(data);
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
      {dummyCounter.map((item, index) => {
        if (index % 4 === 1) {
          return (
            <RowContainer style={{ height: type === "single" && 80 }}>
              {[0, 1, 2, 3].map((item, index2) => (
                dummyCounter[index + item] ?  
                  <div>
                    <CompareTable
                      keys={nameList}
                      data={
                        type === "compare"
                          ? [dummyCounter[index + item], statInfoList[0][dummyCounter[index + item]], colors.blue,
                          statInfoList[1][dummyCounter[index + item]], colors.orange,
                          ]
                          : type === "single"
                            ? [
                              {
                                country: dummyCounter[index + item],
                                [nameList[0]]:
                                  statInfoList[0][dummyCounter[index + item]],
                                [nameList[0] + "Color"]: colors.blue,
                                [nameList[1]]:
                                  statInfoList[1][dummyCounter[index + item]],
                                [nameList[1] + "Color"]: colors.orange,
                              },
                            ]
                            : null
                      }
                    />
                  </div>
                  : null
              ))}
            </RowContainer>
          );
        }
      })}
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
    width: 100%;
    & > :first-child {
      width: 100%;
      align-self: center;
    }
    & > :last-child {
    }
  }
`;

export default memo(StatisticTable);