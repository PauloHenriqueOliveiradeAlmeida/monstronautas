import mariadb from "mariadb";

//  Função responsável por criar a conexão e executar queries com o banco de dados
async function Connection(request, response) { //query = o que vai fazer, values = array com valores opcionais
    const req = request.body;
    const db = await mariadb.createConnection({ //Cria a conexão com o banco
        host: process.env.DB_HOST, //endereço ex: localhost, www.exemplo.com.br, etc...
        database: process.env.DB_NAME, //nome do banco ex: responsaveis, alunos, etc...
        user: process.env.DB_USER, //usuário do banco
        password: process.env.DB_PASSWORD //senha do banco
    });

    return response.json({
        query: req.body
    });
}

export default Connection;
