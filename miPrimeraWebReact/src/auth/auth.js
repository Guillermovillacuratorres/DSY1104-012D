const KEY = "vehiculos_token";

export const getToken = () => localStorage.getItem(KEY);
export const guardarToken = (token) => localStorage.setItem(KEY,token);
export const cerrarSesion = () => localStorage.removeItem(KEY);
export const estaLogueado = () => getToken() !== null;

