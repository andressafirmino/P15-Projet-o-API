import { db } from "../database/databaseconnections.js";
import allProducts from "../data/allProducts.js";
import jantarProducts from "../data/jantarProducts.js";
import reuniaoProducts from "../data/reuniaoProducts.js";
import jardimProducts from "../data/jardimProducts.js";
import infantilProducts from "../data/infantilProducts.js";

export async function cart(req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    try {
        const user = await db.collection("cartProducts").find({ token }).toArray();
        if (!user) {
            return res.status(404).send({ message: "Usuario não cadastrado!" });
        }
        res.send(user);
    } catch (e) {
        res.status(500).send(e.message);
    }
}







// TESTE PRO FRONT USAR REQUISIÇÕES
export function loadAllProducts (req, res){
    res.send(allProducts);
}
export function loadJantarProducts (req, res){
    res.send(jantarProducts);
}
export function loadReuniaoProducts (req, res){
    res.send(reuniaoProducts);
}
export function loadJardimProducts (req, res){
    res.send(jardimProducts);
}
export function loadInfantilProducts (req, res){
    res.send(infantilProducts);
}