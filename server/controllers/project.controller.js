const { addProject, getProjects } = require("../services/project.service");

const projectController = {
  async addProject(req, res) {
    try {
      await addProject(req.body);
      res.status(201).send("Created");
    } catch (err) {
      res.status(400);
    }
  },

  async getProjetcs(req, res) {
    try {
      const response = await getProjects();
      res.status(200).json(response);
    } catch (err) {
      res.status(400);
    }
  },
};

module.exports = { projectController };
