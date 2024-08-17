// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
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

module.exports = { authMiddleware, adminMiddleware };
