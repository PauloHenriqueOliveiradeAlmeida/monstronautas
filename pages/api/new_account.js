import Connection from "./connection";
export default async function (request, response) {
    const req = request.body;

    Connection("INSERT INTO", "responsavel",
    ["nome_responsavel", "email_responsavel", "senha_responsavel"],
    [req.name, req.email, req.password]);

    return response.status(200).json({create: true});
}
