module.exports = function(application){

    application.get('/noticia', function(req, res){

        let connection = application.config.dbConnection();
        let noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia(function(error, result){
            res.render("noticias/noticia", {noticia: result});
        });        
        
    });
        
    application.get('/noticias', function(req, res){
        
        let connection = application.config.dbConnection();
        let noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function(error, result){
            res.render("noticias/noticias", {noticias: result});
        });        
    });   
}