import { Router } from "express";
import { checkout, loadAllProducts, loadSectorProducts, loadSingleProduct } from "../controllers/productsController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { checkoutSchema } from "../schemas/productsSchemas.js";
import { validateAuth } from "../middlewares/validateAuth.js";
//import { cart } from "../controllers/productsController.js";



const productsRouter = Router();

productsRouter.get('/', loadAllProducts);
productsRouter.get('/:sector', loadSectorProducts);
productsRouter.post('/singleProduct', loadSingleProduct);

//productsRouter.get("/carrinho", cart);
productsRouter.post("/confirmar-informacao",validateAuth, validateSchema(checkoutSchema), checkout);



export default productsRouter;