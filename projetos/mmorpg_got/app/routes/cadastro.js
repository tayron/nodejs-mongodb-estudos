const { body, validationResult } = require('express-validator');

module.exports = function(application){
	application.get('/cadastro', function(req, res){
		application.app.controllers.cadastro.cadastro(application, req, res)
	})

	application.post('/cadastrar', [
		body("nome", "O nome deve ser informado").notEmpty(),
		body("usuario", "O usuário deve ser informado").notEmpty(),
		body("senha", "A senha deve ser informada").notEmpty(),
		body("casa", "A casa deve ser informada").notEmpty()		
	], function(req, res){
		application.app.controllers.cadastro.cadastrar(application, validationResult, req, res)
	})
}