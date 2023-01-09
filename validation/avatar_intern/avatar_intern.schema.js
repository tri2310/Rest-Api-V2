const Joi = require('joi');

const schema = {
    create: Joi.object({
        nama_karakter: Joi.string().min(2).required(),
        image: Joi.string().required(),
     
    })
}

module.exports = schema;