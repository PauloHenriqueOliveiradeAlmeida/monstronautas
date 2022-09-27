import Connection from "./connection";

export default async function updateAlunos(request, response) {
    const req = request.body;

    const con = await Connection("UPDATE tb_alunos set nome_aluno=?, idade_aluno=?, sexo_aluno=? where id_aluno=?",
    [
        req.name,
        req.idade,
        req.sexo,
        req.id
    ]);

    return response.json({sucess: true})
}