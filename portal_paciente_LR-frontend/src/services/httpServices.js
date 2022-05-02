export async function get(url, header) {
  console.log(url);
  console.log(header);
  const promise = await fetch(url, {
    headers: header,
  })
  .then((response) => response.json())
  .then((data) => data);
  return promise;
}

export async function post(url, header, data) {
  const promise = await fetch(url, {
    method: "POST",
    body: data,
    mode: "cors",
    headers: {
      header,
      'Access-Control-Allow-Origin': '*' ,
      'Content-type': 'application/json'
  }
  });
  return promise;
}

export async function put(url, header, data) {
  const promise = await fetch(url, {
    method: "PUT",
    body: data,
    headers: {
      header,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' ,
  }
  })
    .then(response => {
    this.setState({ data: response.data });
  })
  return promise;
}


/*
export async function put(url, header,data) {
  const element = document.querySelector('#put-request-async-await .date-updated');
  const promise = await fetch(url, {
    method: "PUT",
    body: data,
    headers: {
      header,
      'Access-Control-Allow-Origin': '*' ,
      'Content-type': 'application/json'
  }
  
  })
  .then(response => response.json())
  element.innerHTML = data.updatedAt;
  //.then(data => this.setState({ data: response.data }));
  
  return promise;
}
*/
