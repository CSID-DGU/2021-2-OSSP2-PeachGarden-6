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
    const op = await db.sqlSelect(searchOpRate());
    let titleList = ["두산", "삼성", "NC", "키움", "SSG", "한화", "LG", "롯데", "KIA", "KT"];
    
    op.map((item, index) => {
      let resultList = {
        title: '',
        list: [],
      }
      resultList.title = titleList[count];
      Object.values(item).map((item2, index2) => {
        resultList.list.push(item2);
      });
      ++count;
      actualReturn.push(resultList);
    });
    
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
    const temp = await db.sqlSelect(showTeamColorList());
    
    temp.map((item, index) => {
      let resultList = {
        title: '',
        list: [],
      }
      resultList.title = item.cname;
      resultList.list = item.script
      actualReturn.push(resultList);
    });
    result.data.resultList = actualReturn;
    return res.status(200).send(result);
  } catch (error) {
    result.error = 1;
    result.message = error;
    return res.status(200).send(result);
  }
});


module.exports = router;
