const { application } = require("express");

module.exports.index = function(application, req, res){

    let connection = application.config.dbConnection();
    let noticasModel = new application.app.models.NoticiasDAO(connection);

    noticasModel.getUltimasNoticias(function(error, result){
        res.render("home/index", {noticias: result});
    });    
}