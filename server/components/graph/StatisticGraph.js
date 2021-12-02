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
          setStatInfoList(valueExtractor({ data: data, key: "statInfo" }));
          setNameList([data[0].playerInfo.pname, data[1].playerInfo.pname]);
          break;
        case "single":
          setStatInfoList(data.statInfo);
          setNameList([data.playerInfo.pname]);
          break;
        default:
          break;
      }
    }
  }, [data, type]);

  useMemo(() => {
    if (statInfoList.length !== 0) {
      if (type === "compare") {
        setDummyCounter(Object.keys(statInfoList[0]));
      } else {
        setDummyCounter(Object.keys(statInfoList));
      }
    }
  }, [statInfoList, type]);

  return (
    (
      <>
        {dummyCounter.map((item, index) => {
          if (index % 2 === 1) {
            return (
              <RowContainer style={{height: type==='single'&&80}}>
                <div>
                  <div>
                    <TextBadge
                      text={dummyCounter[index]}
                      color={colors.white}
                      backgroundColor={colors.gray}
                    />
                  </div>
                  <BarGraph
                    keys={nameList}
                    data={type==='compare'?[
                      {
                        country: dummyCounter[index],
                        [nameList[0]]: statInfoList[0][dummyCounter[index]],
                        [nameList[0] + "Color"]: colors.blue,
                        [nameList[1]]: statInfoList[1][dummyCounter[index]],
                        [nameList[1] + "Color"]: colors.orange,
                      },
                    ]:type==='single'?[
                      {
                        country: dummyCounter[index],
                        [nameList]: statInfoList[dummyCounter[index]],
                        [nameList + "Color"]: colors.blue,
                      },
                    ]:null}
                  />
                </div>
                <div>
                  <div>
                    <TextBadge
                      text={dummyCounter[index + 1]}
                      color={colors.white}
                      backgroundColor={colors.gray}
                    />
                  </div>
                  <BarGraph
                    keys={nameList}
                    data={type==='compare'?[
                      {
                        country: dummyCounter[index + 1],
                        [nameList[0]]: statInfoList[0][dummyCounter[index + 1]],
                        [nameList[0] + "Color"]: colors.blue,
                        [nameList[1]]: statInfoList[1][dummyCounter[index + 1]],
                        [nameList[1] + "Color"]: colors.orange,
                      },
                    ]:type==='single'?[
                      {
                        country: dummyCounter[index + 1],
                        [nameList]: statInfoList[dummyCounter[index + 1]],
                        [nameList + "Color"]: colors.blue,
                      },
                    ]:null}
                  />
                </div>
              </RowContainer>
            );
          }
        })}
      </>
    )
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
    }
  }
  & > :first-child {
    border-right: 1px solid ${colors.gray};
  }
`;

export default memo(StatisticGraph);
