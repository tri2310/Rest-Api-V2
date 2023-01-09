const Schema = require('./interest.schema');

module.exports = {
    createInterest: async (req, res, next) => {
        const {error, value} = Schema.create.validate(req.body);
        if(error){
            res.status(422).send({
                code: 422,
                success: false,
                message: error.details[0].message
            })
        }else {
            next()
        }
    }
}