import { API_ENDPOINTS_SETMESSAGEREAD} from "../constants/api.constants";
import { post } from "./httpServices";


export default async function setMessageRead(person_id,message_id) {
  try {
    const promise = await post(API_ENDPOINTS_SETMESSAGEREAD(person_id,message_id))
    return promise
  }
  catch (err) {
    console.log('Error al cargar setMessageRead: ', err);
  }
}