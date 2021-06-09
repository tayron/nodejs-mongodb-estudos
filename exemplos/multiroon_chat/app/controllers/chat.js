const { body, validationResult } = require('express-validator');

module.exports.iniciaChat = function(application, validationResult, req, res) {    
    let errors = validationResult(req);
    console.error(errors)

    if (!errors.isEmpty()) {
        res.render("index.ejs", {validacao: errors.array()});
        return 
    }      

    res.render('chat.ejs')
}