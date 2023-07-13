import { Router } from "express";
import { loadAllProducts, loadInfantilProducts, loadJantarProducts, loadJardimProducts, loadReuniaoProducts } from "../controllers/productsController.js";
import { cart } from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/carrinho", cart);

productsRouter.get('/', loadAllProducts);
productsRouter.get('/jantar', loadJantarProducts);
productsRouter.get('/reuniao', loadReuniaoProducts);
productsRouter.get('/jardim', loadJardimProducts);
productsRouter.get('/infantil', loadInfantilProducts);




export default productsRouter;