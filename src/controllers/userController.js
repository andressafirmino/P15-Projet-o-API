import bcrypt from 'bcrypt';
import { db } from "../database/databaseconnections.js";
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

export async function signup(req, res) {
    const { name, email } = req.body
    console.log(req.body)

    try {
        let user = await db.collection('users').findOne({ email });
        console.log(user)
        if (user) return res.status(409).send("E-mail de usuário ja cadastrado!");

        const passwordHashed = bcrypt.hashSync(req.body.password, 10);
        delete req.body.password;
        const cad = await db.collection("users").insertOne({
            name,
            email,
            password: passwordHashed
        });
        res.status(201).send(cad);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function signin(req, res) {
    const { email, password } = req.body;

    try {
        const user = await db.collection('users').findOne({ email });
        console.log(user)
        if (!user) return res.status(404).send("Usuário e/ou senha incorretos!");
        console.log(user)

        const correctPassword = bcrypt.compareSync(password, user.password);
        if (!correctPassword) return res.status(401).send("Usuário e/ou senha incorretos!");

      
        const dados = { userId: user._id };
        const chaveSecreta = process.env.JWT_SECRET;

        const token = jwt.sign(dados, chaveSecreta, { expiresIn: "1h" });
        console.log(token)

        res.status(200).send({ user: { token, name: user.name, email: user.email, id: user._id } });
    }
    catch (error) {
        console.log(error);
        res.sendStatus(401);
    }
}

export async function address(req, res) {
    const { id, nameAddress, celNumber, state, city, zipCode, district, street, number, othersInfo } = req.body
    console.log(req.body)

    try {

        await db.collection("address").insertOne({
            id,
            nameAddress,
            zipCode,
            state,
            city,
            street,
            district,
            number,
            celNumber,
            othersInfo
        });
        res.status(201).send("Endereço cadastrado com sucesso!");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getAddress(req, res){
   const {id} = res.locals.session.user
   console.log(id)

   try {
    let address = await db.collection('address').findOne({id});

    if (!address) return res.sendStatus(404);
    const addressinfo = { address }
    res.status(201).send(addressinfo);
} catch (error) {
    console.log(error);
    res.sendStatus(500);
}
}

