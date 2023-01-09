const Joi = require('joi');

const schema = {
    create: Joi.object({
        nama: Joi.string().min(2).required(),
        image: Joi.string().required(),
        deskripsi: Joi.string().required(),
    })
}

module.exports = schema;