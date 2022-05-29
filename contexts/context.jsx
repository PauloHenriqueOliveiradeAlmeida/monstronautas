import { createContext, useState } from "react";
import Router from "next/router"
import { setCookie } from "nookies";
export const  AuthContext = createContext({});

export function AuthProvider(props) {
    const [user, setUser] = useState(null);
    const auth = !!user;

    async function signIn({email, password}) {
        const {rows, token} = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({email: email, password: password}),
            headers: {
              "Content-Type": "application/json"
            }
        });
        setCookie(undefined, "nextauth.token", token, {
            maxAge: 60 * 60 * 24,
            path: "/"
        });
        Router.push("/");
    }
    return (
        <AuthContext.Provider value={{user, auth, signIn}}>
            {props.children}
        </AuthContext.Provider>
    );
}
