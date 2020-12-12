var mysql = require("mysql");

module.exports = function(){
    return mysql.createConnection({
        host : "servidor_mysql_local",
        user : "root",
        password : "yakTLS&70c52",
        database: "portal_noticias"
    });
}