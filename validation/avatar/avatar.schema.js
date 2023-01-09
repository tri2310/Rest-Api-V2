const Joi = require('joi');

const schema = {
    create: Joi.object({
        nama: Joi.string().min(2).required(),
     
    })
}

module.exports = schema;