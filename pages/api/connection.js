import mariadb from "mariadb";

//  Função responsável por criar a conexão e executar queries com o banco de dados
async function Connection(sql_command, table, columns, values) { //sql_command = o que vai fazer, table = nome da tabela, columns = array com o nome das colunas, values = array com os valores
    const db = await mariadb.createConnection({ //Cria a conexão com o banco
        host: process.env.DB_HOST, //endereço ex: localhost, www.exemplo.com.br, etc...
        database: process.env.DB_NAME, //nome do banco ex: responsaveis, alunos, etc...
        user: process.env.DB_USER, //usuário do banco
        password: process.env.DB_PASSWORD //senha do banco
    });
    try {
        db.query(`${sql_command} ${table} (${columns.join()}) values (?, ?, ?)`, values); //query construida pelos parametros
    } finally {
        db.end(); //fecha conexão
    }
}

export default Connection;
