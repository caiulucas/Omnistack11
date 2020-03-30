const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    get() {
        celebrate({
            [Segments.HEADERS]: Joi.object({
                authorization: Joi.string().required(),
            }).unknown(),
        });
    }
}