const express = require('express');
const router = express.Router();
const { login } = require('../controllers/adminController');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const Item = require('../models/Item');

router.post('/login', login);

router.get('/items', protect, adminOnly, async (req, res) => {
  const items = await Item.find().sort({ createdAt: -1 });
  res.json(items);
});

router.get('/users', protect, adminOnly, async (req, res) => {
  const User = require('../models/User');
  const users = await User.find().select('-password').sort({ createdAt: -1 });
  res.json(users);
});

router.put('/item/:id', protect, adminOnly, async (req, res) => {
  const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/item/:id', protect, adminOnly, async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Deleted' });
});

module.exports = router;
