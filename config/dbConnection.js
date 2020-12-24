var mysql = require("mysql");

var connection = function () {    
    return mysql.createConnection({
        host : "172.19.0.2",
        user : "root",
        password : "yakTLS&70c52",
        database: "projeto"
    });
}

module.exports = function(){    
    return connection;
}