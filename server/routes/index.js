const express = require("express");
const {
  searchLeaderboard,
  searchWAA,
  searchTopThree,
} = require("../constants/sql");
const { topThreeProps } = require("../constants/topThree");
const { urlSet } = require("../constants/urls");
const router = express.Router();
const db = require("./../db");
const fs = require("fs");

router.get(urlSet.leaderboard, async (req, res) => {
  let result = db.responseData();
  try {
    let actualReturn = [];
    let count = 1;
    const temp = await db.sqlSelect(searchLeaderboard());

    temp.map((item, index) => {
      let resultList = {
        title: "",
        list: [],
      };
      resultList.title = count;
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

router.get(urlSet.topThree, async (req, res) => {
  let result = db.responseData();

  try {
    let actualReturn = [];
    let count = 0;
    for await (const item of topThreeProps.hitter) {
      let titleList = [
        "타율",
        "출루율",
        "장타율",
        "타점",
        "득점",
        "홈런",
        "도루",
      ];
      let resultList = {
        title: "",
        list: [],
      };
      const temp = await db.sqlSelect(
        searchTopThree({
          roleType: "hitter",
          title: item,
        })
      );
      resultList.title = titleList[count];
      temp.map((item, index) => {
        Object.values(item).map((item2, index2) => {
          resultList.list.push(item2);
        });
      });
      actualReturn.push(resultList);
      ++count;
    }
    // count 초기화
    count = 0;
    for await (const item of topThreeProps.pitcher) {
      let titleList = ["방어율", "탈삼진", "승", "세이브", "홀드"];
      let resultList = {
        title: "",
        list: [],
      };
      const temp = await db.sqlSelect(
        searchTopThree({
          roleType: "pitcher",
          title: item,
        })
      );
      resultList.title = titleList[count];
      temp.map((item, index) => {
        Object.values(item).map((item2, index2) => {
          resultList.list.push(item2);
        });
      });
      actualReturn.push(resultList);
      ++count;
    }
    result.data.resultList = actualReturn;
    return res.status(200).send(result);
  } catch (error) {
    result.error = 1;
    result.message = error;
    return res.status(200).send(result);
  }
});

router.get(urlSet.waa, async (req, res) => {
  let result = db.responseData();
  try {
    let actualReturn = [];
    const temp = await db.sqlSelect(searchWAA());

    temp.map((item, index) => {
      let resultList = {
        title: "",
        list: [],
      };
      count = 0;
      Object.values(item).map((item2, index2) => {
        if (count === 0) resultList.title = item2;
        else resultList.list.push(item2);
        ++count;
      });
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

const deleteFile = (filePath) => {
  if (filePath !== null) {
    fs.unlink(filePath, (err) => {
      // console.log('?', err);
    });
  }
};

router.put(urlSet.deleteFile, (req, res) => {
  let result = db.responseData();
  const { filePath } = req.body;
  try {
    deleteFile(`public/${filePath}`);
    result.data = "success";
    res.status(200).send(result);
  } catch (error) {
    result.error = 1;
    result.message = error;
    res.status(200).send(result);
  }
});

router.put(urlSet.checkFile, (req, res) => {
  let result = db.responseData();
  const { filePath } = req.body;
  try {
    result.data = fs.existsSync(`public/${filePath}`);
    res.status(200).send(result);
  } catch (error) {
    result.error = 1;
    result.message = error;
    res.status(200).send(result);
  }
});

module.exports = router;
