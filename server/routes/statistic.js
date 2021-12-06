const express = require("express");
const { urlSet } = require("../constants/urls");
const { PythonShell } = require("python-shell");
const router = express.Router();
const db = require("./../db");
const {
  selectHitterWarCoordinates,
  selectPitcherWarCoordinates,
  selectHitterPlayerGamesCoordinates,
  selectPitcherPlayerGamesCoordinates,
} = require("../constants/sql/statistic");

router.get(urlSet.scatter, async (req, res) => {
  let result = db.responseData();
  // coordinateList: 전체
  // markerList: 찍을 방점 두개 내지 한개
  const { type, markerList } = req.query;
  let coordinateList = {
    x: [],
    y: [],
  };

  try {
    console.log('타입?? ', type);
    if (type==='타자') {
      coordinateList.x = await db.sqlSelect(
        selectHitterPlayerGamesCoordinates()
      );
      coordinateList.y = await db.sqlSelect(selectHitterWarCoordinates());
    } else {
      coordinateList.x = await db.sqlSelect(
        selectPitcherPlayerGamesCoordinates()
      );
      coordinateList.y = await db.sqlSelect(selectPitcherWarCoordinates());
    }
    coordinateList.x = coordinateList.x.map((item, index) => item.playerGames);
    coordinateList.y = coordinateList.y.map((item, index) => item.war);
    const args = JSON.stringify({
      coordinateList: coordinateList,
      markerList: markerList,
    });
    PythonShell.run(
      "routes/scatter.py",
      { args: args },
      function (err, results) {
        if (err) throw err;
      }
    );
    PythonShell.run(
      "routes/pdf.py",
      { args: args },
      function (err, results) {
        if (err) throw err;
      }
    );

    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    result.error = 1;
    return res.status(200).send(result);
  }
});

module.exports = router;
