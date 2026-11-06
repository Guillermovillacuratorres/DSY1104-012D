import { request } from "./client";

export const obtenerVehiculos = () => request("/vehiculo");
export const buscarVehiculo = (id) => request(`/vehiculo/${id}`);
export const agregarVehiculo = (vehiculo) => request("/vehiculo","POST",vehiculo);
export const eliminarVehiculo = (id) => request(`/vehiculo/${id}`,"DELETE",);
export const actualizarVehiculo = (id,vehiculo) => request(`/vehiculo${id}`,"PUT",vehiculo);