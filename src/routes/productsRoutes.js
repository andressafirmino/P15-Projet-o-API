import { Router } from "express";


const productsRouter = Router();

productsRouter.get("/carrinho", cart);

export default productsRouter;