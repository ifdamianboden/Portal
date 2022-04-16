import { API_ENDPOINTS_PATIENTBASICDATA, API_HEADER, AUTH_HEADER } from "../constants/api.constants";
import { get } from "./httpServices";

export default async function PatientbasicData(gender_id,identification_number, type_id) {
  try {
    const promise = await get(API_ENDPOINTS_PATIENTBASICDATA(gender_id,identification_number, type_id), API_HEADER() )
    return promise
  }
  catch (err) {
    console.log('Error al cargar PatientbasicData: ', err);
  }
}