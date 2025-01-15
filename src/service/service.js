const URL = `https://jsonplaceholder.typicode.com/posts`;

export const getResources = async () => {
  const body = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const resp = fetch(URL, body)
  .then((response) => response.json())

  return resp;
};

export const deleteResources = async (id) => {
  const body = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const resp = fetch(`${URL}/${id}`, body)
  .then((response) => response.json())

  return resp;
};
export const addResources = async (payload) => {
  const body = {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const resp = fetch(URL, body)
  .then((response) => response.json())

  return resp;
};
