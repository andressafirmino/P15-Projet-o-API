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

    const homeAllproducts = allProducts.map((product)=>{
        return { images: product.images[0], 
                 name: product.name, 
                 value: product.value, 
                 sector: product.sector
                }
    })
    console.log(homeAllproducts);
    res.send(homeAllproducts);
}
export function loadSectorProducts (req, res){
    console.log(req.params)

    const {sector} =req.params;

    const homeAllproducts = allProducts.map((product)=>{
        return { images: product.images[0], 
                 name: product.name, 
                 value: product.value, 
                 sector: product.sector
                }
    });

    const sectorProducts = homeAllproducts.filter((product)=> product.sector === sector);


    res.send(sectorProducts);
}