import { Router } from "express";
import { loadAllProducts, loadSectorProducts } from "../controllers/productsController.js";
import { cart } from "../controllers/productsController.js";


const productsRouter = Router();

productsRouter.get("/carrinho", cart);

productsRouter.get('/', loadAllProducts);
productsRouter.get('/:sector', loadSectorProducts);





export default productsRouter;