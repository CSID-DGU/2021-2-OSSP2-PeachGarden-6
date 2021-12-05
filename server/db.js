const mariadb = require("mariadb");
const _ = require("lodash");

const pool = mariadb.createPool({
  host: "14.52.69.42",
  user: "root",
  password: "0000",
  port: 3306,
  database: "player_battle",
  dateStrings: "date",
});

const responseData = () => {
  return {
    error: 0,
    message: "",
    data: {},
  };
};

let objectToCamelCase = (obj) => {
  return _.mapKeys(obj, (v, k) => _.camelCase(k));
};

// 범용 api 함수
// 1. 반환값이 있는 api 함수
const sqlSelect = async (sqlText) => {
  try {
    let connection = await pool.getConnection();
    let result = await connection.query(sqlText);
    connection.release();
    result = result.map(objectToCamelCase);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }

};

// 2. 반환값이 없는 api 함수

module.exports = {
  sqlSelect,
  responseData,
};