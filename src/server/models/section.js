const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: Number, required: true },
});

itemSchema.plugin(uniqueValidator);

const sectionSchema = new Schema({
  title: { type: String, required: true },
  routeName: { type: String, required: true },
  items: [itemSchema],
});

sectionSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Section', sectionSchema);
