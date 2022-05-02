import { API_ENDPOINTS_SUMAR, API_HEADER, AUTH_HEADER } from "../constants/api.constants";
import { get } from "./httpServices";

export default async function sumarServices(dni_afiliado) {
  try {
    const promise = await get(API_ENDPOINTS_SUMAR(dni_afiliado), API_HEADER() )
    return promise
  }
  catch (err) {
    console.log('Error al cargar Sumar: ', err);
  }
}