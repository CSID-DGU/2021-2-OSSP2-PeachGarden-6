import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import {
  COMPARE_DUMMY_DATA,
  COMPARE_DUMMY_DATA_KEY,
} from "../../constants/dummy/comparePage";
import TextBadge from "../Badge/TextBadge";
import BarGraph from "./BarGraph";

const StatisticGraph = ({ data }) => {
  const { playerInfo, bestInfo, worstInfo, statInfo, styleInfo } = data;

  const dummyCounter = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27,
  ];
  
  return (
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
                  keys={COMPARE_DUMMY_DATA_KEY}
                  data={COMPARE_DUMMY_DATA}
                />
              </div>
              <div>
                <div>
                  <TextBadge
                    text={dummyCounter[1 + index]}
                    color={colors.white}
                    backgroundColor={colors.gray}
                  />
                </div>
                <BarGraph
                  keys={COMPARE_DUMMY_DATA_KEY}
                  data={COMPARE_DUMMY_DATA}
                />
              </div>
            </RowContainer>
          );
        }
      })}
    </>
  );
};

const RowContainer = styled.div`
  width: 100%;
  height: 200px;
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
