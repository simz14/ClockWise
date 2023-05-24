export const auth = async (token) => {
  const response = await fetch("http://localhost:8080/auth", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.status === 200) {
    return await response.json();
  } else {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
};
