const Joi = require('joi');

const schema = {
    create: Joi.object({
        nama: Joi.string().min(2).required(),
        role_id: Joi.string().min(2),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
     
    })
}

module.exports = schema;

