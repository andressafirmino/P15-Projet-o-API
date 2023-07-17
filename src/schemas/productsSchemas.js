import joi from "joi";

export const checkoutSchema = joi.object({
    id: joi.string().required(),
    name: joi.string().required(),
    email: joi.string().email().required(),
    state: joi.string().required(), 
    city: joi.string().required(), 
    neighborhood: joi.string().required(), 
    address: joi.string().required(), 
    complement: joi.string().required(), 
    pay: joi.string().required(),
    total: joi.number(),
    cartProducts: joi.array().items(joi.object()).optional()
})