import { createContext, useState, useEffect } from "react";
import Router from "next/router"
import { setCookie, parseCookies } from "nookies";
export const  AuthContext = createContext({});

export function AuthProvider(props) {
    const [user, setUser] = useState(null);
    const auth = !!user;

    useEffect(() => {
        const { "nextauth.token": token } = parseCookies();

        if (token) {
            setUser()
        }
    }, [])

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
            setCookie(undefined, "nextauth.token", res.token, {
                maxAge: 60 * 60 * 24,
                path: "/",
                HttpOnly: true
            });
            Router.push("/alunos")
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
