import { API_ENDPOINTS_POSTMESSAGES } from "../constants/api.constants";
import { post } from "./httpServices";



export async function postMessages(message_id) {
    try {
      const searchParams = new URLSearchParams({
      });
      let data = searchParams.toString();
      const promise = await post(API_ENDPOINTS_POSTMESSAGES, data);
      return promise;
    } catch (err) {
      console.log("Error al enviar messages: ", err);
    }
  }