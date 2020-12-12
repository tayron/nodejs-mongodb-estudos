module.exports = function(application) {
    application.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar', function(req, res){
        let noticia = req.body;
        let connection = application.config.dbConnection();
        let noticiasModel = new application.app.models.noticiasModel(connection);

        noticiasModel.saveNoticia(noticia, function(error, result){
            res.redirect("/noticias");
        });          
    });    
}