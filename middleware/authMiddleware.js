// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const { User } = require('../models/User');
const Role = require('../models/Role');
const Permission = require('../models/Permission');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

const adminMiddleware = async (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Admin privileges required' });
  }
  next();
};

const checkPermission = (permissionName) => {
  return async (req, res, next) => {
      const userRole = req.user.role; // Assuming user's role is stored in the request after authentication

      const role = await Role.findOne({
          where: { name: userRole },
          include: {
              model: Permission,
              where: { name: permissionName }
          }
      });

      if (!role) {
          return res.status(403).json({ msg: 'Access denied. Insufficient permissions.' });
      }

      next(); // User has the required permission, proceed to the next middleware/controller
  };
};


module.exports = { authMiddleware, adminMiddleware ,checkPermission };
