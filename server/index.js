
const express = require("express");
const app = express();
const mariadb = require("mariadb");
const cors = require("cors");
const res = require("express/lib/response");
const { send } = require("express/lib/response");

const banco = mariadb.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
});

app.use(cors());
app.use(express.json());

app.post("/api/connection", (req, res)=>{
    const {name}=req.body;
    const {type}=req.body;
    const {email}=req.body;
    const {password}=req.body;
    
    banco.query("SELECT email FROM cadastro WHERE email = ?", [email],(err, rusult)=>{
        if(err){
           res.send(res); 
        }
        if(rusult.length == 0){
            banco.query("INSERT INTO (name, tipo, email, senha) VALUES (?,?,?,?)",
            [name, type, email, password], (err, rusult)=>{
                if(err){
                    res.send(err);
                }
                res.send({msg:"Cadastrado com sucesso"});
            }
            );
        } else{
            res,send({msg:"Usuario já cadastrado"});   
        }
    });
});



app.post("/api/connection", (req, res)=>{
    const {name}=req.body;
    const {type}=req.body;
    const {email}=req.body;
    const {password}=req.body;

    banco.query("SELECT email FROM cadastro WHERE email =? AND senha =?",[email,password],(err,result)=>{
        if(err){
            res.send(err);
        }
        if(result > 0){
            res.send({msg:"Usuario logado"})
        }else{
            res.send({msg:"Usuario não encontrado"})
        }
    });
});

app.listen(3001, () => {
    console.log("rodando");
});