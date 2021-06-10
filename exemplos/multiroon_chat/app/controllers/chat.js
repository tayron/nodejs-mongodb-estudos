const { body, validationResult } = require('express-validator');
const { emit } = require('../../config/server');

module.exports.iniciaChat = function(application, validationResult, req, res) {    
    let errors = validationResult(req);
    console.error(errors)

    if (!errors.isEmpty()) {
        res.render("index.ejs", {validacao: errors.array()});
        return 
    }   
    
    application.get('io').emit('msgParaCliente', {
        apelido: req.body.apelido, 
        mensagem: ' acabou de entrar no chat'
    })

    res.render('chat.ejs')
}