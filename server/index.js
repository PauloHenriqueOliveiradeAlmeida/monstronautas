
const express = require("express");
const app = express();
const mariadb = require("mariadb");
const cors = require("cors");
const banco = mariadb.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"teste"
});
app.get("/", (req, res) => {
        let mysql = "INSERT INTO Login (nome) VALUES ('erick')";
        banco.query(mysql, (err, result) => {
            console.log(err);
        });
    });

app.listen(3001, () => {
    console.log("rodando");
});