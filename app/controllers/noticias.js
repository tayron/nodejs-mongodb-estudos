module.exports.noticias = function(application, req, res){
    let connection = application.config.dbConnection();
    let noticiasModel = new application.app.models.NoticiasDAO(connection);
    let nomeNoticia = req.query.nome;

    if (!nomeNoticia) {
        nomeNoticia = "";
    }

    noticiasModel.getNoticias(nomeNoticia, function(error, result){
        res.render("noticias/noticias", {noticias: result, filtro: nomeNoticia});
    }); 
}

module.exports.noticia = function(application, req, res){
    let connection = application.config.dbConnection();
    let noticiasModel = new application.app.models.NoticiasDAO(connection);    
    let id = req.query.id;

    noticiasModel.getNoticia(id, function(error, result){        
        console.log(result);
        res.render("noticias/noticia", {noticia: result});
    });        
}