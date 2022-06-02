import Connection from "./connection";
import nookies from "nookies";
import { v4 as uuid } from "uuid";
export default async function (request, response) {
    const req = request.body;
    const con = await Connection("INSERT INTO responsavel (nome_responsavel, email_responsavel, senha_responsavel) values (?, ?, ?)", [
        req.name,
        req.email,
        req.password
    ]);

}
