const { body, validationResult } = require('express-validator');

module.exports = function(application) {
    application.get('/formulario_inclusao_noticia', function(req, res){
        application.app.controllers.admin.formulario_inclusao_noticia(res);
    });

    application.post('/noticias/salvar', [
        body("titulo", "O título deve ser informado").notEmpty(),
        body("resumo", "O resumo deve ser informado").notEmpty(),
        body("resumo", "O resumo deve ter tamanho entre 10 e 100 caracteres").isLength({min: 10, max: 100}),
        body("nome_autor", "O autor deve ser informado").notEmpty(),
        body("data_noticia", "A data da notícia é obrigatório").notEmpty().isDate({format: 'YYYY-MM-DD'}),
        body("noticia", "A notícia deve ser informado").notEmpty()
        
    ], function(req, res){
        application.app.controllers.admin.noticias_salvar(application, validationResult, req, res);
    });    
}