import joi from "joi";

export const checkoutSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    state: joi.string().required(), 
    city: joi.string().required(), 
    neighborhood: joi.string().required(), 
    address: joi.string().required(), 
    complement: joi.string().required(), 
    pay: joi.string().required(),
    total: joi.number(),
    cartProducts: joi.array().items(joi.object())
})