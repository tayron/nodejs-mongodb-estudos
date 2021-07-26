const Joi = require('joi')

const schema = Joi.object({
    usuario: Joi.string().min(3).max(30).required().error((errors) => new Error('"usuário" deve ter entre 3 à 30 caracteres')),
    idade: Joi.number().integer().min(18).max(36).error((errors) => new Error('"idade" deve ser entre 18 à 36 anos')),
    pais:  Joi.string().required().valid('Brasil', 'EUA', 'Japão').error((errors) => new Error('Pais permitido deve ser somente Brasil, EUA ou Japão.'))
})

try {
    const value = schema.validate({ usuario: 'Tayron', idade: 18, pais: 'Brasils' });

    if (value.error !== undefined) {
        throw new Error(value.error.message)    
    }

    console.log('Sucesso')
} catch (err) { 
    console.log("Seguinte erro ocorreu:")
    console.error(err.message)
}