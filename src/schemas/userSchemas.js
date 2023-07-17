import joi from "joi"

export const schemasignup = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(5).required()
})

export const schemasignin = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(3)
})

export const schemasaddress = joi.object({
    id: joi.string().required(),
    nameAddress: joi.string().required(),
    zipCode: joi.string().required(),
    state: joi.string().required(),
    city: joi.string().required(),
    street: joi.string().required(),
    district: joi.string().required(),
    number: joi.string().required(),
    celNumber: joi.string().required(),
    othersInfo: joi.string().optional().allow(null,"")
})
