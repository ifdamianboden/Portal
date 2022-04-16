import { API_ENDPOINTS_PARAMETRIC, AUTH_HEADER } from "../constants/api.constants";
import { get } from "./httpServices";

export default async function parametricServices(tokenUser) {
  try {
    const promise = await get(API_ENDPOINTS_PARAMETRIC, AUTH_HEADER(tokenUser))
    return promise
  }
  catch (err) {
    console.log('Error al cargar las instituciones: ', err);
  }
}