const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models/User');

// const register = async (req, res) => {
//     try {
//         const { name, email, password, role } = req.body;

//         // Check if user already exists
//         let user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({ msg: 'User already exists' });
//         }

//         // Create new user
//         user = new User({
//             name,
//             email,
//             password: await bcrypt.hash(password, 10),
//             role
//         });

//         await user.save();
//         res.status(201).json({ msg: 'User registered successfully' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Create and return JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { login };
