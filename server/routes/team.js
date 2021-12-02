var express = require('express');
const { searchOpRate, searchTeamColor, showTeamColorList } = require('../constants/sql/team');
const { urlSet } = require('../constants/urls');
var router = express.Router();
const db = require('../db');

router.get(urlSet.team, async (req, res) => {
  let result = db.responseData();
  try {
    let actualReturn = [];
    let count = 0;

    let titleList = ["두산", "삼성", "NC", "키움", "SSG", "한화", "LG", "롯데", "KIA", "KT"];
    let resultList = {
      title: '',
      list: [],
    }
    const temp = await db.sqlSelect(searchOpRate());
    
    temp.map((item, index) => {
      resultList.title = titleList[count];
      Object.values(item).map((item2, index2) => {
        resultList.list.push(item2);
      });
      ++count;
    });
    console.log(22, resultList);
    actualReturn.push(resultList);
    result.data.resultList = actualReturn;
    return res.status(200).send(result);
  } catch (error) {
    result.error = 1;
    result.message = error;
    return res.status(200).send(result);
  }
});

router.get(urlSet.color, async (req, res) => {
  let result = db.responseData();

  try {
    let actualReturn = [];

    return res.status(200).send(result);
  } catch (error) {
    result.error = 1;
    result.message = error;
    return res.status(200).send(result);
  }
});


module.exports = router;
