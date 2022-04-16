import { API_ENDPOINTS_CHRONIC, API_HEADER, AUTH_HEADER } from "../constants/api.constants";
import { get } from "./httpServices";

export default async function chronic(institution_id,patient_id) {
  try {
    const promise = await get(API_ENDPOINTS_CHRONIC(institution_id,patient_id), API_HEADER() )
    return promise
  }
  catch (err) {
    console.log('Error al cargar anthropometricData: ', err);
  }
}

