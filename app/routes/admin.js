const { body, validationResult } = require('express-validator');

module.exports = function(application) {
    application.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar', [
        body("titulo", "O título deve ser informado").notEmpty(),
        body("resumo", "O resumo deve ser informado").notEmpty(),
        body("resumo", "O resumo deve ter tamanho entre 10 e 100 caracteres").isLength({min: 10, max: 100}),
        body("nome_autor", "O autor deve ser informado").notEmpty(),
        body("data_noticia", "A data da notícia é obrigatório").notEmpty().isDate({format: 'YYYY-MM-DD'}),
        body("noticia", "A notícia deve ser informado").notEmpty()
        
    ], function(req, res){
        let noticia = req.body;
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log(errors.array());
            res.render("admin/form_add_noticia", {validacao: errors.array()});
            return 
        }      

        let connection = application.config.dbConnection();
        let noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.saveNoticia(noticia, function(error, result){
            res.redirect("/noticias");
        });          
    });    
}