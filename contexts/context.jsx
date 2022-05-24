import { createContext, useState } from "react";
import Router from "next/router"
import { setCookie } from "nookies";
export const  AuthContext = createContext({});

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const auth = !!user;

    async function signIn({email, password}) {
        //const { token, user_email } = await Connection(`SELECT * FROM responsavel where email_responsavel=${email} and senha_responsavel=${password}`);
        // setCookie(undefined, "token", token, {
        //     maxAge: 60 * 60 * 24, //expira em um dia
        //     path: "/",
        //     httpOnly: true
        // // });
        // // setUser(user_email);
        // Router.push("/alunos");
    }
    return (
        <AuthContext.Provider value={{user, auth, signIn}}>
        {children}
        </AuthContext.Provider>
    );
}
