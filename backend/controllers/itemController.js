const Item = require('../models/Item');

exports.createLost = async (req, res, next) => {
  try {
    const data = req.body;
    if (req.file) data.image = '/uploads/' + req.file.filename;
    const item = await Item.create({ ...data, status: 'LOST' });
    res.status(201).json(item);
  } catch (err) { next(err); }
};

exports.createFound = async (req, res, next) => {
  try {
    const data = req.body;
    if (req.file) data.image = '/uploads/' + req.file.filename;
    const item = await Item.create({ ...data, status: 'FOUND' });
    res.status(201).json(item);
  } catch (err) { next(err); }
};

exports.getAll = async (req, res, next) => {
  try {
    const { status, search, category, location } = req.query;
    const filter = {};
    if (status) filter.status = status.toUpperCase();
    if (category) filter.category = category;
    if (location) filter.location = { $regex: location, $options: 'i' };
    if (search) filter.itemName = { $regex: search, $options: 'i' };
    const items = await Item.find(filter).sort({ createdAt: -1 });
    res.json(items);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ msg: 'Not found' });
    res.json(item);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const data = req.body;
    if (req.file) data.image = '/uploads/' + req.file.filename;
    const item = await Item.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(item);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Deleted' });
  } catch (err) { next(err); }
};
