import { getToken } from "../auth/auth";

const API_URL = import.meta.env.VITE_API_URL;

export async function request(endpoint, method="GET",body) {
    const token = getToken();
    const headers = {
        "Content-type":"application/json"
    };

    const req = await fetch(`${API_URL}${endpoint}`,{
        method,
        headers,
        body: body ? JSON.stringify(body): undefined
    });
    if(!req.ok) throw Error(`Error: ${req.status}`);
    
    return req.status === 204 ? null : req.json();
}