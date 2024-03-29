import { createContext, useState } from "react";
import Router from "next/router"
import { setCookie } from "nookies";
export const  AuthContext = createContext({});

export function AuthProvider(props) {
    const [user, setUser] = useState(null);
    const auth = !!user;

    async function signIn({email, password}) {
        const req = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({email: email, password: password}),
            headers: {
              "Content-Type": "application/json"
            }
        });
        try {
            const res = await req.json();
            setCookie(undefined, "next_auth_token", res.token, {
                maxAge: 60 * 60 * 24,
                path: "/",
                HttpOnly: true
            });
            Router.push("/alunos");
        }
        catch(e) {
            window.alert("Usuário não encontrado")
        }

    }
    return (
        <AuthContext.Provider value={{user, auth, signIn}}>
            {props.children}
        </AuthContext.Provider>
    );
}
