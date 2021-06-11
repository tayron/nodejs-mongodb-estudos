var mysql = require("mysql");

var connection = function () {    
    return mysql.createConnection({
        host : "172.20.0.2",
        user : "root",
        password : "yakTLS&70c52",
        database: "nodejs_crud"
    });
}

module.exports = function(){    
    return connection;
}