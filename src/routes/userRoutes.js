import { Router } from "express";
import { signup, signin, address } from "../controllers/userController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { schemasignup, schemasignin, schemasaddress } from "../schemas/userSchemas.js";


const userRouter = Router()


userRouter.post("/sign-up", validateSchema(schemasignup), signup);
userRouter.post("/sign-in", validateSchema(schemasignin), signin);
userRouter.post("/address", validateSchema(schemasaddress), address);


export default userRouter