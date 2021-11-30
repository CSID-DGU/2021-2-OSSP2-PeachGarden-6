var express = require("express");
const { searchAllPitStat, searchAllHitStat, searchPitcherStyle, searchHitterStyle, searchBestCount, searchWorstCount } = require("../constants/sql/style");
const { urlSet } = require("../constants/urls");
var router = express.Router();
const db = require("../db");

router.get(urlSet.compare, async (req, res, next) => {
  const data = db.responseData();
  const { pid } = req.query;
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

  if ((pid / 10000) === 1){

    CompareResult0 = await db.sqlSelect(
      searchHitterInfo({
        pid: pid?pid:null,
      })
    );

    CompareResult1 = await db.sqlSelect(
      searchAllHitStat({
        pid: pid?pid:null,
      })
    );

    CompareResult2 = await db.sqlSelect(
      searchHitterStyle({
        pid: pid?pid:null,
      })
    );
  }
  else {

    CompareResult0 = await db.sqlSelect(
      searchPitcherInfo({
        pid: pid?pid:null,
      })
    );

    CompareResult1 = await db.sqlSelect(
      searchAllPitStat({
        pid: pid?pid:null,
      })
    );

    CompareResult2 = await db.sqlSelect(
      searchPitcherStyle({
        pid: pid?pid:null,
      })
    );
  }
  
  CompareResult3 = await db.sqlSelect(
    searchBestCount({
      pid: pid?pid:null,
    })
  );

  CompareResult4 = await db.sqlSelect(
    searchWorstCount({
      pid: pid?pid:null,
    })
  );
  
  data.data = styleResult;
  return res.status(200).send(data);
});

module.exports = router;