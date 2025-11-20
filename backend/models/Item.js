const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  category: { type: String, default: 'General' },
  description: { type: String },
  location: { type: String },
  date: { type: Date },
  image: { type: String },
  status: { type: String, enum: ['LOST','FOUND','RETURNED'], default: 'LOST' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  contactInfo: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
