var express = require("express");
const {
  searchPitcherStat,
  searchHitterStat,
  testQuery,
} = require("../constants/sql/search");
const { urlSet } = require("../constants/urls");
var router = express.Router();
const db = require("./../db");

router.get(urlSet.searchPlayer, (req, res, next) => {
  const { name, position, role, team } = req.query;
  let playerResult = null;
  if (role==='타자') {
    playerResult = db.sqlSelect(
      searchHitterStat({ 
        name: name?name:null,
        position: position?position:null,
        team: team?team:null,
      })
      , res
    );
  } else {
    playerResult = db.sqlSelect(
      searchPitcherStat({ 
        name: name?name:null,
        team: team?team:null,
      })
      , res
    );
  }
});

module.exports = router;
