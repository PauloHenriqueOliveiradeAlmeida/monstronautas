import Connection from "./connection";
export default async function (request, response) {
    const req = request.body;
    Connection("INSERT INTO", "aluno",
    ["nome_aluno", "idade_aluno", "sexo_aluno"],
    [req.name, req.idade, req.sexo]);

    return response.json({create: true});
}
