import Connection from "./connection";
import jsonwebtoken from "jsonwebtoken";
export default async function NewAccount(request, response) {
    const req = request.body;

    const con = await Connection("INSERT INTO tb_responsavel (nome_responsavel, email_responsavel, senha_responsavel) values (?, ?, ?)", [
        req.name,
        req.email,
        req.password
    ]);

    const id = parseInt(con.insertId.toString());

    const token = jsonwebtoken.sign({id: id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});

    const set_cookie = `next_auth_token=${token};expiresIn=${60 * 60 * 24};path=/`

    response.setHeader("Set-Cookie", set_cookie);
    return response.json({createAccount: true});
}