import { API_ENDPOINTS_BASICDATA, API_HEADER, AUTH_HEADER } from "../constants/api.constants";
import { get } from "./httpServices";

export default async function basicData(gender_id, identification_number, type_id) {
  try {
    const promise = await get(API_ENDPOINTS_BASICDATA(gender_id, identification_number, type_id), API_HEADER() )
    return promise
  }
  catch (err) {
    console.log('Error al cargar basicData: ', err);
  }
}