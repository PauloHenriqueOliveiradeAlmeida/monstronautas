import Connection from "./connection";
import mariadb from "mariadb";
import {v4 as uuid} from "uuid";
export default async function Login(request, response) {
    const req = request.body;

    const con = await fetch(`${process.env.URL}/api/connection`, {
            method: "POST",
            body: JSON.stringify({
                    email: "paulo333henrique00@gmail.com",
                    password: "cão cão",
                    query: "SELECT * FROM responsavel"
                }),
    });
    const ret = con.json();
    return response.json({
        teste: "OK",
        token: uuid(),
        rows: ret
    });
}
