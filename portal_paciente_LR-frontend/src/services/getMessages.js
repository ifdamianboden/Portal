import { API_ENDPOINTS_GETMESSAGES, API_HEADER, AUTH_HEADER } from "../constants/api.constants";
import { get } from "./httpServices";

export default async function getMessages(only_unread) {
  try {
    const promise = await get(API_ENDPOINTS_GETMESSAGES(only_unread), API_HEADER() )
    return promise
  }
  catch (err) {
    console.log('Error al enviar Mensaje: ', err);
  }
}