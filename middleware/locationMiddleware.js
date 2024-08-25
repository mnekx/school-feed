const { UserSchool } = require('../models/UserSchool');
const { UserRegion } = require('../models/UserRegion');
const { UserDistrict } = require('../models/UserDistrict');
const { UserWard } = require('../models/UserWard');
const { UserVillage } = require('../models/UserVillage');

const checkLocationAccess = async (req, res, next) => {
  const { regionId, districtId, wardId, villageId, schoolId } = req.body; // Assuming IDs are passed in the body

  const userId = req.user._id;

  // Check Region Access
  if (regionId) {
    const hasAccess = await UserRegion.findOne({
      user: userId,
      region: regionId,
    });
    if (!hasAccess)
      return res
        .status(403)
        .json({ msg: 'Access denied to the specified region.' });
  }

  // Check District Access
  if (districtId) {
    const hasAccess = await UserDistrict.findOne({
      user: userId,
      district: districtId,
    });
    if (!hasAccess)
      return res
        .status(403)
        .json({ msg: 'Access denied to the specified district.' });
  }

  // Check Ward Access
  if (wardId) {
    const hasAccess = await UserWard.findOne({ user: userId, ward: wardId });
    if (!hasAccess)
      return res
        .status(403)
        .json({ msg: 'Access denied to the specified ward.' });
  }

  // Check Village Access
  if (villageId) {
    const hasAccess = await UserVillage.findOne({
      user: userId,
      village: villageId,
    });
    if (!hasAccess)
      return res
        .status(403)
        .json({ msg: 'Access denied to the specified village.' });
  }

  // Check School Access
  if (schoolId) {
    const hasAccess = await UserSchool.findOne({
      user: userId,
      school: schoolId,
    });
    if (!hasAccess)
      return res
        .status(403)
        .json({ msg: 'Access denied to the specified school.' });
  }

  next(); // Proceed if access is granted
};

module.exports = { checkLocationAccess };
