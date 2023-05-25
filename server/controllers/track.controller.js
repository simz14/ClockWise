const { addTrackService } = require("../services/track.service");

const trackController = {
  async addTrack(req, res) {
    try {
      await addTrackService(req.body);
      res.status(201).send("Saved");
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

module.exports = { trackController };
