export const getProjects = async () => {
  const response = await fetch("http://localhost:8080/projects");
  if (response.status === 200) {
    return await response.json();
  } else {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
};
