import nookies from "nookies";
import Connection from "./connection";
export default async function newAluno(request, response) {
    const req = request.body;
    const token = req.cookies
    const con = await Connection("INSERT INTO tb_alunos (nome_aluno, idade_aluno, sexo_aluno, aula_atual_aluno, fk_id_responsavel, fk_id_aula) values (?, ?, ?, ?, ?, ?)",
    [
        req.name,
        req.idade,
        req.sexo,
        1,
        1,
        1
    ]);

    return response.json({create: token});
}
