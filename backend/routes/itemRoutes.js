const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { createLost, createFound, getAll, getById, update, remove } = require('../controllers/itemController');

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) { cb(null, 'uploads/'); },
  filename: function (req, file, cb) { cb(null, Date.now() + path.extname(file.originalname)); }
});
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

router.get('/', getAll);
router.get('/:id', getById);
router.post('/report-lost', upload.single('image'), createLost);
router.post('/report-found', upload.single('image'), createFound);
router.put('/:id', upload.single('image'), update);
router.delete('/:id', remove);

module.exports = router;
