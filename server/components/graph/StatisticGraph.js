import { memo, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { valueExtractor } from "../../utils/functions";
import TextBadge from "../Badge/TextBadge";
import BarGraph from "./BarGraph";


const hitterStats = ['WAR','G','타석','타수',
'득점','안타','2타','3타',
'홈런','타점','도루','도실',
'볼넷','사구','삼진','병살',
'희타','타율','출루','장타',
'OPS','woba','WRC+'];

const pitcherStats = ['WAR','G','선발','이닝',
'승','패','홀드','세이브',
'완투','완봉','실점','탈삼진',
'볼넷','사구','고의사구','피안타',
'피2타','피3타','피홈런','보크',
'폭투','실책','FIP','FIP+',
'ERA','ERA+','WHIP'];

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
      if (Object.keys(statInfoList[0]).includes('타점')){
        setDummyCounter(hitterStats);
      }
      else{
        setDummyCounter(pitcherStats);
      }
    }
  }, [statInfoList, type]);
  console.log(dummyCounter);

  // const hitterStats = { 0:'WAR', 1:'G',2:'타석',3:'타수',
  //   4:'득점',5:'안타',6:'2타',7:'3타',
  //   8:'홈런',9:'타점',10:'도루',11:'도실',
  //   12:'볼넷',13:'사구',14:'삼진',15:'병살',
  //   16:'희타',17:'타율',18:'출루',19:'장타',
  //   20:'OPS',21:'woba',22:'WRC+'};

  // const pitcherStats = {0:'WAR',1:'G',2:'선발',3:'이닝',
  //   4:'승',5:'패',6:'홀드',7:'세이브',
  //   8:'완투',9:'완봉',10:'실점',11:'탈삼진',
  //   12:'볼넷',13:'사구',14:'고의사구',15:'피안타',
  //   16:'피2타',17:'피3타',18:'피홈런',19:'보크',
  //   20:'폭투',21:'실책',22:'FIP',23:'FIP+',
  //   24:'ERA',25:'ERA+',26:'WHIP'};

  console.log(dummyCounter);
  console.log(22, hitterStats);
  //dummyCounter = hitterStats;
  //Object.values(dummyCounter).includes('OPS') ? dummyCounter = hitterStats : dummyCounter = pitcherStats;
  console.log(dummyCounter);
  return (
    <>
      <RowContainerType2>
        <div>
          <div>
            <TextBadge
              text={`출전 경기수 ~ WAR`}
              color={colors.white}
              backgroundColor={colors.gray}
            />
          </div>
          <img src="images/scatter.png" alt="" />
        </div>
        <div>
          <div>
            <TextBadge
              text={`WAR`}
              color={colors.white}
              backgroundColor={colors.gray}
            />
          </div>
          <img src="images/pdf_war.png" alt="" />
        </div>
        <div>
          <div>
            <TextBadge
              text={`출전 경기수`}
              color={colors.white}
              backgroundColor={colors.gray}
            />
          </div>
          <img src="images/pdf_player_games.png" alt="" />
        </div>
      </RowContainerType2>
      {dummyCounter.map((item, index) => {
        if (index % 4 === 0) {
          return (
            <RowContainer style={{ height: type === "single" && 80 }}>
              {[0, 1, 2, 3].map((item, index2) => (
                dummyCounter[index + item]?
                <div>
                  <div>
                    <TextBadge
                      text={dummyCounter[index + item]}
                      color={colors.white}
                      backgroundColor={colors.gray}
                    />
                  </div>
                  {console.log(dummyCounter)}
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
                :null
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

const RowContainerType2 = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  border-bottom: 1px solid ${colors.gray};
  & > div {
    position: relative;
    width: 100%;
    height: 300px;
    border-right: 1px solid ${colors.gray};
    text-align: center;
    & > :first-child {
      position: absolute;
      top: 10px;
      left: 10px;
      align-self: center;
    }
    & > img {
      height: 100%;
    }
  }
`;

export default memo(StatisticGraph);
