import { Router } from "express";
import { signup } from "../controllers/userController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { schemasignup } from "../schemas/userSchemas.js";


const userRouter = Router()


userRouter.post("/sign-up", validateSchema(schemasignup), signup);


export default userRouter