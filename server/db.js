const mysql = require('mysql');
const _ = require("lodash");

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'0000',
    port:3306,
    database:'player_battle',
    dateStrings:'date'
});

const getPlayer = (callback) => {
    connection.query('SELECT * FROM players ORDER BY pid DESC', (err, rows, fields) => {
        if(err) throw err;
        callback(rows);
    });
};

const responseData = () => {
    return {
        error: 0,
        message: '',
        data: null,
    }
};

let objectToCamelCase = (obj) => {
    return _.mapKeys(obj, (v, k) => _.camelCase(k));
};

// 범용 api 함수
// 1. 반환값이 있는 api 함수
const sqlSelect = (sqlText, res) => {
    connection.query(sqlText, (err, rows, fields) => {
      const result = responseData();
      if (err) {
          result.error = 1;
          result.message = err;
      }
      result.data = rows.map(objectToCamelCase);
      res.status(200).send(result);
    });
  };

// 2. 반환값이 없는 api 함수


module.exports = {
    getPlayer,
    sqlSelect,
}
