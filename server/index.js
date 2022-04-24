
const express = require("express");
const app = express();
const mariadb = require("mariadb");
const cors = require("cors");
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
});
let sql = "INSERT INTO cadastro(nome , tipo, email, senha) VALUES (?,?,?,?)";
banco.query(sql,[nome , tipo, email, senha],(err, result)=>{
    console.log(err);
});


app.listen(3001, () => {
    console.log("rodando");
});