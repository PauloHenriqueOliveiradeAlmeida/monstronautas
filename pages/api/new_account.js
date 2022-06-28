import Connection from "./connection";
export default async function NewAccount(request) {
    const req = request.body;
    const con = await Connection("INSERT INTO tb_responsavel (nome_responsavel, email_responsavel, senha_responsavel) values (?, ?, ?)", [
        req.name,
        req.email,
        req.password
    ]);

}
