const Joi = require('joi');

const schema = {
    create: Joi.object({
        nama_room: Joi.string().min(2).required(),
        max_users: Joi.string().default(120),
        
    })
}

module.exports = schema;