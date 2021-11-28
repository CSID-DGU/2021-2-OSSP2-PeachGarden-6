var express = require("express");
const {
  searchPitcherStat,
  searchHitterStat,
  testQuery,
} = require("../constants/sql/search");
const { urlSet } = require("../constants/urls");
var router = express.Router();
const db = require("./../db");

router.get(urlSet.searchPlayer, async (req, res, next) => {
  const data = db.responseData();
  const { name, position, role, team } = req.query;
  let playerResult = null;
  if (role==='투수') {
    playerResult = await db.sqlSelect(
      searchPitcherStat({ 
        name: name?name:null,
        team: team?team:null,
      })
    );
  } else {
    playerResult = await db.sqlSelect(
      searchHitterStat({ 
        name: name?name:null,
        position: position?position:null,
        team: team?team:null,
      })
    );
  }
  
  data.data = playerResult;
  return res.status(200).send(data);
});

module.exports = router;