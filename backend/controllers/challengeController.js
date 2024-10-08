const { Challenge } = require('../models/Challenge');
const { ChallengeMilestone } = require('../models/ChallengeMilestone');
const { UserSchool } = require('../models/UserSchool');

const createChallenge = async (req, res) => {
  try {
    const challenge = new Challenge(req.body);
    await challenge.save();
    res.status(201).json(challenge);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllChallenges = async (req, res) => {
  try {
    const userId = req.user._id;

    const schools = await UserSchool.find({ user: userId }).select('school');
    const challenges = await Challenge.find({
      school: { $in: schools.map((loc) => loc.school) },
    }).populate('school');

    res.json(challenges);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getChallengeById = async (req, res) => {
  try {
    const userId = req.user._id;
    const challengeId = req.params.id;

    const challenge = await Challenge.findById(challengeId).populate('school');
    if (!challenge) {
      return res.status(404).json({ msg: 'Challenge not found' });
    }

    const authorized = await UserSchool.findOne({
      user: userId,
      school: challenge.school._id,
    });
    if (!authorized) {
      return res.status(403).json({ msg: 'Access denied to this challenge.' });
    }

    res.json(challenge);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateChallenge = async (req, res) => {
  try {
    const challenge = await Challenge.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!challenge) {
      return res.status(404).json({ msg: 'Challenge not found' });
    }
    res.json(challenge);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteChallenge = async (req, res) => {
  try {
    const challenge = await Challenge.findByIdAndDelete(req.params.id);
    if (!challenge) {
      return res.status(404).json({ msg: 'Challenge not found' });
    }
    res.json({ msg: 'Challenge deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addMilestone = async (req, res) => {
  try {
    const milestone = new ChallengeMilestone({
      challenge: req.params.id,
      milestone: req.body.milestone,
      updated_by: req.user.id,
      comments: req.body.comments,
    });
    await milestone.save();

    const challenge = await Challenge.findById(req.params.id);
    challenge.current_status = req.body.milestone;
    await challenge.save();

    res.status(201).json(milestone);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMilestonesByChallenge = async (req, res) => {
  try {
    const milestones = await ChallengeMilestone.find({
      challenge: req.params.id,
    }).populate('updated_by');
    res.json(milestones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createChallenge,
  getAllChallenges,
  getChallengeById,
  updateChallenge,
  deleteChallenge,
  addMilestone,
  getMilestonesByChallenge,
};
