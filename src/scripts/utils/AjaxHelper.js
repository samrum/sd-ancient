export default function fetchUrl(url, options = {}) {
  return new Promise(resolve => {
    fetch(url, {
      method: "GET",
      headers: new Headers(options),
      mode: "cors",
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => console.log(error));
  });
}
