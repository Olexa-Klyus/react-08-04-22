import Joi from "joi";
// прописуємо валідатор за допомогою пакету Joi

const carValidator=Joi.object({
    // model:Joi.string().min(1).max(20).required().messages({
    //     // якщо не прописати повідомлення помилки, то вони будуть по замовчуванню (повернені з бекенду)
    //     'string.empty':'Model не може бути порожнім',
    //     'string.min':'Model має бути мін 2 символи'
    // }),

    // або в regex прописуємо регулярний вираз
    model:Joi.string().regex(/^[a-zA-ZА-яіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'тільки букви мін 1 символ, максимум 20'
    }),
    price:Joi.number().min(0).max(1000000).required(),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
})

export {carValidator}
