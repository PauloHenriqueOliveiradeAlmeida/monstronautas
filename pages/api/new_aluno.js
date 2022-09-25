import jsonwebtoken from "jsonwebtoken";
import Connection from "./connection";
export default async function newAluno(request, response) {
    const req = request.body;
    const token = request.cookies.next_auth_token;

    const id_responsavel = jsonwebtoken.verify(token, process.env.JWT_SECRET).id;
    const con = await Connection("INSERT INTO tb_alunos (nome_aluno, idade_aluno, sexo_aluno, aula_atual_aluno, fk_id_responsavel) values (?, ?, ?, ?, ?)",
    [
        req.name,
        req.idade,
        req.sexo,
        1,
        id_responsavel,
    ]);

    return response.status(200).json({create: true});

}
