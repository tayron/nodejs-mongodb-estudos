const { body, validationResult } = require('express-validator');

module.exports = function(application) {
    application.get('/chat', function(req, res){
        application.app.controllers.chat.iniciaChat(application, validationResult, req, res)
    })    

    application.post('/chat', [
        body("apelido", "O nome ou apelido deve ser informado").notEmpty(),
        body("apelido", "O nome ou apelido deve ter entre 3 e 15 caracteres").isLength(3, 15)
    ], function(req, res){
        application.app.controllers.chat.iniciaChat(application, validationResult, req, res)
    })    
}