import { getCookie } from "cookies-next";
export default function Auth(request, response) {
    const auth = getCookie("auth", {request, response});

    return response.json({funfou: auth})
}
