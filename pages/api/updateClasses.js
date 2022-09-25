import Connection from "./connection";

export default async function updateClasses(request, response) {
    const req = request.body;

    const con = await Connection("UPDATE tb_alunos set aula_atual_aluno=? where id_aluno=?",
    [
        req.aula_atual_aluno,
        req.id
    ]);

    return response.json({sucess: true})
}