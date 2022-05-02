import { API_ENDPOINTS_PERSONANDUSER, AUTH_HEADER } from "../constants/api.constants";
import { post } from "./httpServices";

export default async function createpersonanduser(tokenUser) {
  try {
    const promise = await post(API_ENDPOINTS_PERSONANDUSER, AUTH_HEADER(tokenUser))
    return promise
  }
  catch (err) {
    console.log('Error al cargar personAndUser: ', err);
  }
}
