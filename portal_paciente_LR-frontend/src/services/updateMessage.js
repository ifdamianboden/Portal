import { API_ENDPOINTS_UPDATEMESSAGE, AUTH_HEADER } from "../constants/api.constants";
import { put } from "./httpServices";

export default async function updateMessages(tokenUser) {
  try {
    const promise = await put(API_ENDPOINTS_UPDATEMESSAGE, AUTH_HEADER(tokenUser))
    return promise
  }
  catch (err) {
    console.log('Error updateMessage: ', err);
  }
}