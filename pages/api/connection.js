import mariadb from "mariadb";

//  Classe responsável por criar a conexão e executar queries com o banco de dados
export const Connection = mariadb.createConnection({ //Cria a conexão com o banco
    host: process.env.DB_HOST, //endereço ex: localhost, www.exemplo.com.br, etc...
    database: process.env.DB_NAME, //nome do banco ex: responsaveis, alunos, etc...
    user: process.env.DB_USER, //usuário do banco
    password: process.env.DB_PASSWORD //senha do banco
});
