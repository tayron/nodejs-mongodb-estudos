module.exports = function(application){

    application.get('/noticia', function(req, res){

        let connection = application.config.dbConnection();
        let noticiasModel = new application.app.models.noticiasModel(connection);

        noticiasModel.getNoticia(function(error, result){
            res.render("noticias/noticia", {noticia: result});
        });        
        
    });   
}