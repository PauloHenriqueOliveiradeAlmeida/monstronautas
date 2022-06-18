import Connection from "./connection";
export default async function getAlunos(request, response) {
    const req = request.body;

    const con = await Connection("SELECT * FROM responsavel where email_responsavel=? and senha_responsavel=?", [req.email, req.password]);
    const values = con[0];
    if (values.length != 0) {
        return response.status(200).json({rows: con, token: uuid()});
    }
}
