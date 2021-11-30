var express = require("express");
const { searchStyle } = require("../constants/sql/style");
const { urlSet } = require("../constants/urls");
var router = express.Router();
const db = require("../db");

router.get(urlSet.style, async (req, res, next) => {
  const data = db.responseData();
  const { style, script } = req.query;
  let styleResult = null;

  styleResult = await db.sqlSelect(
    searchStyle({
      style: style ? style : null,
      script: script ? script : null,
    })
  );

  data.data = styleResult;
  return res.status(200).send(data);
});

module.exports = router;