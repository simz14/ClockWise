const { Track } = require("../models/track");

const addTrackService = async (data) => {
  const { timestamp, description, projectId } = data;

  try {
    await Track.create({
      timestamp: timestamp,
      description: description,
      projectId: projectId,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { addTrackService };
