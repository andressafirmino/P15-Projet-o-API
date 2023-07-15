import { Router } from "express";
import { loadAllProducts, loadSectorProducts, loadSingleProduct } from "../controllers/productsController.js";
import { cart } from "../controllers/productsController.js";



const productsRouter = Router();

productsRouter.get("/carrinho", cart);

productsRouter.get('/', loadAllProducts);
productsRouter.get('/:sector', loadSectorProducts);
productsRouter.post('/singleProduct', loadSingleProduct);




export default productsRouter;