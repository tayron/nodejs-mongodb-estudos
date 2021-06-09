const { body, validationResult } = require('express-validator');

module.exports = function(application) {
    application.post('/chat', [
        body("apelido", "O nome ou apelido deve ser informado").notEmpty(),
        body("apelido", "O nme ou apelido deve ter entre 3 e 15 caracteres").isLength(3, 15)
    ], function(req, res){
        application.app.controllers.chat.iniciaChat(application, validationResult, req, res)
    })

    application.get('/chat', function(req, res){
        application.app.controllers.chat.iniciaChat(application, req, res)
    })    
}