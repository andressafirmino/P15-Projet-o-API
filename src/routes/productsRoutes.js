import { Router } from "express";
import { loadAllProducts, loadSectorProducts } from "../controllers/productsController.js";
import { cart } from "../controllers/productsController.js";
import { validateAuth } from "../middlewares/validateAuth.js";


const productsRouter = Router();

productsRouter.get("/carrinho", cart);

productsRouter.get('/', validateAuth, loadAllProducts);
productsRouter.get('/:sector', loadSectorProducts);





export default productsRouter;