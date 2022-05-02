import { environment } from "../environments/environments.demo";

const baseUrl = environment.baseURL;

export let LOGIN_HEADER = () => {
    let header = {
        "accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      }
      return header;
}

export let AUTH_HEADER = (tokenId) => {
    let header = {
      'Authorization': `Bearer ${tokenId}`,
    }
    return header;
  }

  export let API_HEADER = () => {
    let header = {
      "Accept": "application/json",
    };
    return header;
  };

export const API_ENDPOINTS_LOGIN = `${baseUrl}/login`;

//export const API_ENDPOINTS_CREATEMESSAGES = `${baseUrl}/createmessage?header=1&body=1&is_formatted=true`;

export const API_ENDPOINTS_GETALLMESSAGES = `${baseUrl}/get-all-messages`;

export const API_ENDPOINTS_UPDATEMESSAGE = `${baseUrl}/updatemessage`;

export const API_ENDPOINTS_PERSONANDUSER = `${baseUrl}/createpersonanduser`;

export const API_ENDPOINTS_INSTITUCIONES = `${baseUrl}/institutions/all`;

export const API_ENDPOINTS_PARAMETRIC = `${baseUrl}/parametric/identificationtypes`;

export const API_ENDPOINTS_PROVINCES = `${baseUrl}/parametric/provinces`;

export const API_ENDPOINTS_GETMESSAGESBYPERSON = (person_id, only_unread) =>{
  let url = `${baseUrl}/get-messages-by-person?person_id=${person_id}&only_unread=${only_unread}`;
  return url;
}

export const API_ENDPOINTS_CREATEMESSAGES = (header,body,is_formatted) =>{
  let url = `${baseUrl}/createmessage?header=${header}&body=${body}&is_formatted=${is_formatted}`;
  return url;
}

export const API_ENDPOINTS_SETMESSAGEREAD = (person_id, message_id) =>{
  let url = `${baseUrl}/setmessageread?person_id=${person_id}&message_id=${message_id}`;
  return url;
}


export const API_ENDPOINTS_SUMAR = (dni_afiliado) =>{
  let url = `${baseUrl}/sumar/data/${dni_afiliado}`;
  return url;
}

export const API_ENDPOINTS_GETMESSAGES = (only_unread) =>{
  let url = `${baseUrl}/getmessages?only_unread=${only_unread}`;
  return url;
}

export const API_ENDPOINTS_POSTMESSAGES = (message_id) =>{
  let url = `${baseUrl}/setmessagesread?message_id=${message_id}`;
  return url;
}


export const API_ENDPOINTS_ALLERGIES = (institution_id, patient_id) =>{
  let url = `${baseUrl}/hcegeneral/${institution_id}/allergies/${patient_id}`;
  return url;
}

export const API_ENDPOINTS_ANTHROPOMETRICDATA = (institution_id, patient_id) =>{
  let url = `${baseUrl}/hcegeneral/${institution_id}/anthropometricData/${patient_id}`;
  return url;
}

export const API_ENDPOINTS_FAMILYHISTORIES = (institution_id, patient_id) =>{
  let url = `${baseUrl}/hcegeneral/${institution_id}/familyHistories/${patient_id}`;
  return url;
}

export const API_ENDPOINTS_CHRONIC = (institution_id, patient_id) =>{
  let url = `${baseUrl}/hcegeneral/${institution_id}/chronic/${patient_id}`;
  return url;
  
}

export const API_ENDPOINTS_TOOTHRECORDS = (institution_id, patient_id, tooth_sct_id) =>{
  let url = `${baseUrl}/hcegeneral/${institution_id}/toothRecords/${patient_id}/tooth/${tooth_sct_id}`;
  return url;
  
}

export const API_ENDPOINTS_ACTIVEPROBLEMS = (institution_id, patient_id) =>{
  let url = `${baseUrl}/hcegeneral/${institution_id}/activeProblems/${patient_id}`;
  return url;
  
}

export const API_ENDPOINTS_HOSPITALIZATION = (institution_id, patient_id) =>{
  let url = `${baseUrl}/hcegeneral/${institution_id}/hospitalization/${patient_id}`;
  return url;
  
}

export const API_ENDPOINTS_SOLVEDPROBLEMS = (institution_id, patient_id) =>{
  let url = `${baseUrl}/hcegeneral/${institution_id}/solvedProblems/${patient_id}`;
  return url;
  
}

export const API_ENDPOINTS_VITALSIGNS = (institution_id, patient_id) =>{
  let url = `${baseUrl}/hcegeneral/${institution_id}/vitalSigns/${patient_id}`;
  return url;
  
}

export const API_ENDPOINTS_INMUNIZATION = (institution_id, patient_id) =>{
  let url = `${baseUrl}/hcegeneral/${institution_id}/immunizations/${patient_id}`;
  return url;
  
}

export const API_ENDPOINTS_MEDICATIONS = (institution_id, patient_id) =>{
  let url = `${baseUrl}/hcegeneral/${institution_id}/medications/${patient_id}`;
  return url;
  
}

export const API_ENDPOINTS_PERSONALHYSTORIES = (institution_id, patient_id) =>{
  let url = `${baseUrl}/hcegeneral/${institution_id}/personalHistories/${patient_id}`;
  return url;
  
}


export const API_ENDPOINTS_BASICDATA = (gender_id, identification_number, type_id) =>{
  let url = `${baseUrl}/patient/basicData?gender_id=${gender_id}&identification_number=${identification_number}&type_id=${type_id}`;
  return url;
  
}

export const API_ENDPOINTS_COMPLETEDATA = (gender_id, identification_number, type_id) =>{
  let url = `${baseUrl}/patient/completeData?gender_id=${gender_id}&identification_number=${identification_number}&type_id=${type_id}`;
  return url;
  
}

export const API_ENDPOINTS_PATIENTBASICDATA = (gender_id, identification_number, type_id) =>{
  let url = `${baseUrl}/patient/basicData?gender_id=${gender_id}&identification_number=${identification_number}&type_id=${type_id}`;
  return url;
  
}

export const API_ENDPOINTS_PATIENTCOMPLETEDATA = (gender_id, identification_number, type_id) =>{
  let url = `${baseUrl}/patient/completeData?gender_id=${gender_id}&identification_number=${identification_number}&type_id=${type_id}`;
  return url;
  
}



export const API_INMUNIZATIONS = `${baseUrl}/hcegeneral/1/immunizations/1`;










