import { request } from "./client"

export const login = (username, password)  => request("/auth/login","POST",{username,password});
export const registro = (username, password)  => request("/auth/registro","POST",{username,password});