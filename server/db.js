const mysql = require('mysql');

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
}

module.exports = {
    getPlayer
}
