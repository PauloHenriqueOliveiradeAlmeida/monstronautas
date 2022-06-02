import Connection from "./connection";
import mariadb from "mariadb";
import { v4 as uuid } from "uuid";
export default async function Login(request, response) {
    const req = request.body;

    const con = await Connection("SELECT * FROM responsavel where email_responsavel=? and senha_responsavel=?", [req.email, req.password]);
    const values = con[0];
    if (req.email === values.email_responsavel && req.password === values.senha_responsavel) {
        return response.status(200).json({rows: con, token: uuid()});
    }
    else {
        return response.json({token: null});
    }

}
