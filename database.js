var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'Saurav@123',
    database : 'lyive',
    debug    :  true
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;