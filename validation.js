const Joi = require("@hapi/joi");

const registerValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        phoneNo: Joi.string().min(11).required(),
        address: Joi.string().required()
    });

    return schema.validate(data)
};

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

    return schema.validate(data)
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;