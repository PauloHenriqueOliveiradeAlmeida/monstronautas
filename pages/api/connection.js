const mariadb = require("mariadb");
const res = require("express/lib/response");
const { send } = require("express/lib/response");

const banco = mariadb.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
});
export default (request, response) => {
    const body = request.body;
    
    function connection() {
        body.post(body, (req, res)=>{
            const {name}= body;
            const {type}= body;
            const {email}= body;
            const {password}= body;
            
            banco.query("SELECT email FROM cadastro WHERE email = ?", [email],(err, result)=>{
                if(err){
                res.send(res); 
                }
                if(result.length == 0){
                    banco.query("INSERT INTO (name, tipo, email, senha) VALUES (?,?,?,?)",
                    [name, type, email, password], (err, result)=>{
                        if(err){
                            res.send(err);
                        }
                        res.send({msg:"Cadastrado com sucesso"});
                    }
                    );
                } else{
                    res.send({msg:"Usuario já cadastrado"});   
                }
            })
        });
            
    }return response.json(body);
}
