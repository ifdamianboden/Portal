import { API_ENDPOINTS_PROVINCES, AUTH_HEADER } from "../constants/api.constants";
import { get } from "./httpServices";

export default async function provincesServices(tokenUser) {
  try {
    const promise = await get(API_ENDPOINTS_PROVINCES, AUTH_HEADER(tokenUser))
    return promise
  }
  catch (err) {
    console.log('Error al cargar Provincia: ', err);
  }
}
provincesServices(2);
