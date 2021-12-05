import { memo, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { valueExtractor } from "../../utils/functions";
import TextBadge from "../Badge/TextBadge";
import BarGraph from "./BarGraph";

const StatisticGraph = ({ data, type }) => {
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

  return (
    console.log(statInfoList),
    <>
      {dummyCounter.map((item, index) => {
        if (index % 4 === 1) {
          return (
            <RowContainer style={{ height: type === "single" && 80 }}>
              {[0, 1, 2, 3].map((item, index2) => (
                <div>
                  <div>
                    <TextBadge
                      text={dummyCounter[index + item]}
                      color={colors.white}
                      backgroundColor={colors.gray}
                    />
                  </div>
                  <BarGraph
                    keys={nameList}
                    data={
                      type === "compare"
                        ? [
                            {
                              country: dummyCounter[index + item],
                              [nameList[0]]:
                                statInfoList[0][dummyCounter[index + item]],
                              [nameList[0] + "Color"]: colors.blue,
                              [nameList[1]]:
                                statInfoList[1][dummyCounter[index + item]],
                              [nameList[1] + "Color"]: colors.orange,
                              [nameList[2]]:
                                statInfoList[2][dummyCounter[index + item]],
                              [nameList[2] + "Color"]: colors.orange,
                            },
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
              ))}
            </RowContainer>
          );
        }
      })}
    </>
  );
};

const RowContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  border-bottom: 1px solid ${colors.gray};
  & > div {
    display: flex;
    width: 50%;
    & > :first-child {
      width: 40%;
      align-self: center;
    }
    & > :last-child {
      border-left: 1px solid ${colors.gray};
      border-right: 1px solid ${colors.gray};
    }
  }
`;

export default memo(StatisticGraph);
