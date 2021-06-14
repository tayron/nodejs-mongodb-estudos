module.exports.cadastro = function(application, req, res) {
    res.render('cadastro')
}

module.exports.cadastrar = function(application, validationResult, req, res) {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.render("cadastro", {validacao: errors.array()});
        return 
    }   

    var dadosForm = req.body;
    res.render('cadastro')
}