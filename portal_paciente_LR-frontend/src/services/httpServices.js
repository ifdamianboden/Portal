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
    headers: header,
    body: data,
  });
  return promise;
}
