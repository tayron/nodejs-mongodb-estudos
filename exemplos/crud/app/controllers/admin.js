module.exports.formulario_inclusao_noticia = function(res) {
    res.render("admin/form_add_noticia", {validacao: [], noticia: {}});
}

module.exports.noticias_salvar = function(application, validationResult, req, res) {
    let noticia = req.body;
    let errors = validationResult(req);    

    if (!errors.isEmpty()) {
        res.render("admin/form_add_noticia", {validacao: errors.array(), noticia: noticia});
        return 
    }      

    let connection = application.config.dbConnection();
    let noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.saveNoticia(noticia, function(error, result){
        res.redirect("/noticias");
    })    
}