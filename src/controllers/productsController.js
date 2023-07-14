import { db } from "../database/databaseconnections.js";

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
export async function loadAllProducts (req, res){

    try{
        const allProducts = await db.collection('allProducts').find().toArray();
        const homeAllproducts = allProducts.map((product)=>{
            return { images: product.images[0], 
                     name: product.name, 
                     value: product.value, 
                     sector: product.sector
                    }
        })
        console.log(homeAllproducts);
        res.send(homeAllproducts);

    }catch(err){
        console.log(err.message);
    }

}
export async function loadSectorProducts (req, res){
    const {sector} =req.params;

    try{
        const allProducts = await db.collection('allProducts').find().toArray();
        const homeAllproducts = allProducts.map((product)=>{
            return { images: product.images[0], 
                     name: product.name, 
                     value: product.value, 
                     sector: product.sector
                    }
        });

        const sectorProducts = homeAllproducts.filter((product)=> product.sector === sector);
        res.send(sectorProducts);
    }catch(err){
        console.log(err.message);
    }



}