const { addProject } = require("../services/project.service");

const projectController = {
  async addProject(req, res) {
    try {
      await addProject(req.body);
      res.status(201).send("Created");
    } catch (err) {
      res.status(400);
    }
  },
};

module.exports = { projectController };
