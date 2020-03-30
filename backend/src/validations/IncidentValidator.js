const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    get() {
        celebrate({
            [Segments.QUERY]: Joi.object().keys({
                page: Joi.number(),
            }),
        });
    },

    delete() {
        celebrate({
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number().required(),
            }),
        });
    },
}