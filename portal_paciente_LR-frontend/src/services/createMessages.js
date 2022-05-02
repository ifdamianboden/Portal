import { API_ENDPOINTS_CREATEMESSAGES} from "../constants/api.constants";
import { post } from "./httpServices";


export default async function createmessage(header,body,is_formatted) {
  try {
    const promise = await post(API_ENDPOINTS_CREATEMESSAGES(header,body,is_formatted))
    return promise
  }
  catch (err) {
    console.log('Error al cargar getByPerson: ', err);
  }
}