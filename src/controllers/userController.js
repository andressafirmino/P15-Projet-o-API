import bcrypt from 'bcrypt';
import { db } from "../database/databaseconnections.js";


export async function signup(req, res) {
    const { name, email } = req.body
    console.log(req.body)   

    try {
        let user = await db.collection('users').findOne({ email });
        console.log(user)
        if (user) return res.status(409).send("E-mail de usuário ja cadastrado!");

        const passwordHashed = bcrypt.hashSync(req.body.password, 10);
        delete req.body.password;
        await db.collection("users").insertOne({
            name,
            email,
            password: passwordHashed
        });
        res.status(201).send("Usuário cadastrado com sucesso!");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

