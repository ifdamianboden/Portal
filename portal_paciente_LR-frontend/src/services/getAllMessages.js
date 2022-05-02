import { API_ENDPOINTS_GETALLMESSAGES, AUTH_HEADER } from "../constants/api.constants";
import { get } from "./httpServices";

export default async function getAllMessages(tokenUser) {
  try {
    const promise = await get(API_ENDPOINTS_GETALLMESSAGES, AUTH_HEADER(tokenUser))
    return promise
  }
  catch (err) {
    console.log('Error al cargar getAllMessages: ', err);
  }
}
