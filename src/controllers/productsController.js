import { ObjectId } from "mongodb";
import { db } from "../database/databaseconnections.js";


export async function loadAllProducts(req, res) {

    try {
        const allProducts = await db.collection('allProducts').find().toArray();
        const homeAllproducts = allProducts.map((product) => {
            return {
                images: product.images[0],
                name: product.name,
                value: product.value,
                sector: product.sector,
                id: product._id
            }
        })
        console.log(homeAllproducts);
        res.send(homeAllproducts);

    } catch (err) {
        console.log(err.message);
    }

}

export async function loadSectorProducts(req, res) {
    const { sector } = req.params;

    try {
        const allProducts = await db.collection('allProducts').find().toArray();
        const homeAllproducts = allProducts.map((product) => {
            return {
                images: product.images[0],
                name: product.name,
                value: product.value,
                sector: product.sector,
                id: product._id
            }
        });

        const sectorProducts = homeAllproducts.filter((product) => product.sector === sector);
        res.send(sectorProducts);
    } catch (err) {
        console.log(err.message);
    }



}

export async function loadSingleProduct(req, res) {
    const { id } = req.body;

    try {

        const singleProduct = await db.collection('allProducts').findOne({ _id: new ObjectId(id) });
        res.send(singleProduct);

    } catch (err) {
        console.log(err.message)
        res.status(500).send(err.message);
    }
}
/* export async function cart(req, res) {
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
} */

export async function checkout(req, res) {
    const {name, email, state, city, neighborhood, address, complement, pay, total, cartProducts } = req.body;
    const date = new Date();

    try {        
        await db.collection("sales").insertOne({name, email, state, city, neighborhood, address, complement, pay, total, cartProducts, date});
        res.send("OK");
    } catch (err) {
        console.log(err.message)
        res.status(500).send(err.message);
    }
}