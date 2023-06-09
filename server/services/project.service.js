const { Project } = require("../models/project");

const addProject = async (data) => {
  const { name, color } = data;

  try {
    await Project.create({
      name: name,
      color: color,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};
const getProjects = async () => {
  try {
    return await Project.findAll();
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { addProject, getProjects };
