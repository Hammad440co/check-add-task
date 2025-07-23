import { httpAxios } from "@/helper/httpHelper";
export async function signUp(user) {
    const result = await httpAxios.post("/api/user", user).then((response) => response.data);
    return result;
}


export async function login(LoginData) {
    const result = await httpAxios.post("/api/logins", LoginData).then((response) => response.data);
    return result;
}


export async function currentUser() {
    const result = await httpAxios.get("/api/current").then((res) => res.data);
    return result;
}


export async function logout() {
    const result = await httpAxios.post("/api/logout",).then((response) => response.data);
    return result;
}