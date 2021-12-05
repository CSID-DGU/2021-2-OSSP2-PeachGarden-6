var express = require("express");
const {
  searchAllPitStat,
  searchAllHitStat,
  searchPitcherStyle,
  searchHitterStyle,
  searchBestCount,
  searchWorstCount,
  searchPitcherInfo,
  searchHitterInfo,
  searchAvgPitStat,
  searchAvgHitStat,
} = require("../constants/sql/compare");
const { urlSet } = require("../constants/urls");
var router = express.Router();
const db = require("../db");

router.get(urlSet.compare, async (req, res, next) => {
  const data = db.responseData();
  const { pidL, pidR } = req.query;
  // 0: name, birth, position, team_name
  // 1: stat
  // 2: style
  // 3: count best
  // 4: count worst
  let CompareResult0 = null;
  let CompareResult1 = null;
  let CompareResult2 = null;
  let CompareResult3 = null;
  let CompareResult4 = null;
  let avgStatInfo = null;

  try {
    // pidR이 존재 : 비교
    // pidR이 null | undefined : 싱글
    let result = {
      p1Info: {},
      p2Info: {},
      avgInfo: {},
    }
    for await (pid of [pidL, pidR]) {
      if (pid / 10000 < 2) {
        CompareResult0 = await db.sqlSelect(
          searchHitterInfo({
            pid: pid ? pid : null,
          })
        );
  
        CompareResult1 = await db.sqlSelect(
          searchAllHitStat({
            pid: pid ? pid : null,
          })
        );
    
        CompareResult2 = await db.sqlSelect(
          searchHitterStyle({
            pid: pid ? pid : null,
          })
        );
        
        avgStatInfo = await db.sqlSelect(searchAvgHitStat());
      } else {
        CompareResult0 = await db.sqlSelect(
          searchPitcherInfo({
            pid: pid ? pid : null,
          })
        );
    
        CompareResult1 = await db.sqlSelect(
          searchAllPitStat({
            pid: pid ? pid : null,
          })
        );
  
        CompareResult2 = await db.sqlSelect(
          searchPitcherStyle({
            pid: pid ? pid : null,
          })
        );

        avgStatInfo = await db.sqlSelect(searchAvgPitStat());
      }
    
      CompareResult3 = await db.sqlSelect(
        searchBestCount({
          pid: pid ? pid : null,
        })
      );
    
      CompareResult4 = await db.sqlSelect(
        searchWorstCount({
          pid: pid ? pid : null,
        })
      );
      result.avgInfo = {
        statInfo: avgStatInfo,
      };
      if (pid === pidL) {
        result.p1Info = {
          playerInfo: CompareResult0[0],
          statInfo: CompareResult1[0],
          styleInfo: CompareResult2,
          bestInfo: CompareResult3[0],
          worstInfo: CompareResult4[0],
        };
      } else {
        result.p2Info = {
          playerInfo: CompareResult0[0],
          statInfo: CompareResult1[0],
          styleInfo: CompareResult2,
          bestInfo: CompareResult3[0],
          worstInfo: CompareResult4[0],
        };
      }
    }
  
    data.data = result
    return res.status(200).send(data);
  } catch (error) {
    data.error = 1;
    data.message = error;
    console.log(error);
    return res.status(200).send(data);
  }
  
});

module.exports = router;
