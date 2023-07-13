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