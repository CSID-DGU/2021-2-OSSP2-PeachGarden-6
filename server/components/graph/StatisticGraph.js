import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { valueExtractor } from "../../utils/functions";
import TextBadge from "../Badge/TextBadge";
import BarGraph from "./BarGraph";

const StatisticGraph = ({ data }) => {
  const statInfoList = valueExtractor({ data: data, key: "statInfo" });
  const nameList = [data[0].playerInfo.pname, data[1].playerInfo.pname];
  const dummyCounter = Object.keys(statInfoList[0]);

  return (
    (
      <>
        {dummyCounter.map((item, index) => {
          if (index % 2 === 1) {
            return (
              <RowContainer>
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
                    data={[
                      {
                        country: dummyCounter[index],
                        [nameList[0]]: statInfoList[0][dummyCounter[index]],
                        [nameList[0] + "Color"]: colors.blue,
                        [nameList[1]]: statInfoList[1][dummyCounter[index]],
                        [nameList[1] + "Color"]: colors.orange,
                      },
                    ]}
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
                    data={[
                      {
                        country: dummyCounter[index + 1],
                        [nameList[0]]: statInfoList[0][dummyCounter[index + 1]],
                        [nameList[0] + "Color"]: colors.blue,
                        [nameList[1]]: statInfoList[1][dummyCounter[index + 1]],
                        [nameList[1] + "Color"]: colors.orange,
                      },
                    ]}
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
  height: 150px;
  display: flex;
  border-bottom: 1px solid ${colors.gray};
  & > div {
    display: flex;
    width: 50%;
    & > :first-child {
      width: 20%;
      align-self: center;
      margin: 0 20px;
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
