module.exports.cadastro = function(application, req, res) {
    var connection = application.config.dbConnection
    connection()

    res.render('cadastro', {validacao: {}, dadosForm: {}})
}

module.exports.cadastrar = function(application, validationResult, req, res) {
    let errors = validationResult(req);

    var connection = application.config.dbConnection
    connection.inserirUsuario()

    if (!errors.isEmpty()) {
        res.render("cadastro", {
            validacao: errors.array(), 
            dadosForm: req.body
        });
        return 
    }   

    
    //var UsuariosDAO = new application.app.models.UsuariosDAO(connection)

    UsuariosDAO.inserirUsuario(req.body)
    
    res.render('cadastro', {validacao: {}, dadosForm: {}})
}