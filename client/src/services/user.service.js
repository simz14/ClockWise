export const addUser = async (data) => {
  const response = await fetch("http://localhost:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.status === 201) {
    return response;
  } else {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
};

export const checkUser = async (data) => {
  const response = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.status === 200) {
    return response;
  } else {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
};
