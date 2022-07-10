import Connection from "./connection";
import jsonwebtoken from "jsonwebtoken";
export default async function Login(request, response) {
    const req = request.body;

    const con = await Connection("SELECT * FROM tb_responsavel where email_responsavel=? and senha_responsavel=?", [req.email, req.password]);
    const values = con[0];
    if (values.length != 0) {
        return response.status(200).json({
            token: jsonwebtoken.sign({id: values.id_responsavel}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});
        });
    }
}
