const Joi = require('joi')
/*
messages: {
  'string.alphanum': '{{#label}} must only contain alpha-numeric characters',
  'string.base': '{{#label}} must be a string',
  'string.base64': '{{#label}} must be a valid base64 string',
  'string.creditCard': '{{#label}} must be a credit card',
  'string.dataUri': '{{#label}} must be a valid dataUri string',
  'string.domain': '{{#label}} must contain a valid domain name',
  'string.email': '{{#label}} must be a valid email',
  'string.empty': '{{#label}} is not allowed to be empty',
  'string.guid': '{{#label}} must be a valid GUID',
  'string.hex': '{{#label}} must only contain hexadecimal characters',
  'string.hexAlign': '{{#label}} hex decoded representation must be byte aligned',
  'string.hostname': '{{#label}} must be a valid hostname',
  'string.ip': '{{#label}} must be a valid ip address with a {{#cidr}} CIDR',
  'string.ipVersion': '{{#label}} must be a valid ip address of one of the following versions {{#version}} with a {{#cidr}} CIDR',
  'string.isoDate': '{{#label}} must be in iso format',
  'string.isoDuration': '{{#label}} must be a valid ISO 8601 duration',
  'string.length': '{{#label}} length must be {{#limit}} characters long',
  'string.lowercase': '{{#label}} must only contain lowercase characters',
  'string.max': '{{#label}} length must be less than or equal to {{#limit}} characters long',
  'string.min': '{{#label}} length must be at least {{#limit}} characters long',
  'string.normalize': '{{#label}} must be unicode normalized in the {{#form}} form',
  'string.token': '{{#label}} must only contain alpha-numeric and underscore characters',
  'string.pattern.base': '{{#label}} with value {:[.]} fails to match the required pattern: {{#regex}}',
  'string.pattern.name': '{{#label}} with value {:[.]} fails to match the {{#name}} pattern',
  'string.pattern.invert.base': '{{#label}} with value {:[.]} matches the inverted pattern: {{#regex}}',
  'string.pattern.invert.name': '{{#label}} with value {:[.]} matches the inverted {{#name}} pattern',
  'string.trim': '{{#label}} must not have leading or trailing whitespace',
  'string.uri': '{{#label}} must be a valid uri',
  'string.uriCustomScheme': '{{#label}} must be a valid uri with a scheme matching the {{#scheme}} pattern',
  'string.uriRelativeOnly': '{{#label}} must be a valid relative uri',
  'string.uppercase': '{{#label}} must only contain uppercase characters'
}
*/
const schema = Joi.object({
    usuario: Joi.string().min(3).max(30).required().messages({
        'string.max': '{{#label}} deve ter no máximo 30 caracteres',
        'string.min': '{{#label}} deve ter no mínimo 3 caracteres',
    }),
    idade: Joi.number().integer().min(18).max(36).messages({
        'number.max': '{{#label}} deve ter no máximo 36 anos',
        'number.min': '{{#label}} deve ter no mínimo 18 anos',
    }),
    pais:  Joi.string().required().valid('Brasil', 'EUA', 'Japão').messages({
        'any.only' : '{{#label}} deve ser somente Brasil, EUA ou Japão.'
    }),
    estado:  Joi.string().required().invalid('BH', 'SP', 'RJ').messages({
        'any.invalid' : '{{#label}} não deve pode receber os seguintes valores BH, SP, RJ.',
        'any.required' : '{{#label}} deve ser informado'
    })    
})

try {
    const value = schema.validate({ usuario: 'Tayron', idade: 18, pais: 'Brasil', estado: 'SC' });

    if (value.error !== undefined && value.error.details[0] !== undefined) {
        throw new Error(value.error.details[0].message)
    }

    console.log('Sucesso')
} catch (err) { 
    console.log("Seguinte erro ocorreu:")
    console.error(err.message)
}