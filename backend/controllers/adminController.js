// const Admin = require('../models/Admin');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// exports.login = async (req, res, next) => {
//   try {
//     const { adminID, password } = req.body;
//     const admin = await Admin.findOne({ adminID });
//     if (!admin) return res.status(400).json({ msg: 'Invalid credentials' });
//     const match = await bcrypt.compare(password, admin.password);
//     if (!match) return res.status(400).json({ msg: 'Invalid credentials' });
//     const token = jwt.sign({ id: admin._id, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '7d' });
//     res.json({ token, admin: { id: admin._id, adminID: admin.adminID } });
//   } catch (err) { next(err); }
// };


const Item = require('../models/Item');
const User = require('../models/User');

exports.getStats = async (req, res, next) => {
  try {
    const totalLost = await Item.countDocuments({ status: 'LOST' });
    const totalFound = await Item.countDocuments({ status: 'FOUND' });
    const returned = await Item.countDocuments({ status: 'RETURNED' });
    const pending = await Item.countDocuments({ status: { $in: ['LOST','FOUND'] } });

    // simple monthly chart data (last 6 months)
    const now = new Date();
    const months = [];
    const lostPerMonth = [];
    for (let i = 5; i >= 0; i--) {
      const start = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const end = new Date(now.getFullYear(), now.getMonth() - i + 1, 1);
      months.push(start.toLocaleString('default', { month: 'short' }));
      const cnt = await Item.countDocuments({ createdAt: { $gte: start, $lt: end } });
      lostPerMonth.push(cnt);
    }

    res.json({ totalLost, totalFound, returned, pending, months, lostPerMonth });
  } catch (err) { next(err); }
};
