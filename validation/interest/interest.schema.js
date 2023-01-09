const Joi = require('joi');

const schema = {
    create: Joi.object({
        name: Joi.string().min(2).required(),
        email: Joi.string().email().required(),
        no_phone: Joi.string().min(2).required(),
        name_company: Joi.string().min(3).required(),

    })
}

module.exports = schema;