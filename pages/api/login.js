import Connection from "./connection";
import { v4 as uuid } from "uuid";
export default async function Login(request, response) {
    const req = request.body;

    const con = await Connection("SELECT * FROM responsavel where email_responsavel=? and senha_responsavel=?", [req.email, req.password]);
    const values = con[0];
    if (values.length != 0) {
        return response.status(200).json({rows: con, token: uuid()});
    }
}
