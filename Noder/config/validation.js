const Joi = require('@hapi/joi');

const registerValidation = data => {
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        email: Joi.string().min(2).required().email(),
        password: Joi.string().min(2).required()
    });

    return schema.validate(data);
}

const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().min(2).required().email(),
        password: Joi.string().min(2).required()
    });

    return schema.validate(data);
}

const flightValidation = data => {
    const schema = Joi.object({
        number: Joi.string().min(2).required(),
        time_from: Joi.string().min(4).required(),
        time_to: Joi.string().min(4).required(),
        place_from: Joi.string().min(2).required(),
        place_to: Joi.string().min(2).required()
    });

    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.flightValidation = flightValidation;
