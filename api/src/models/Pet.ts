import { Schema, model } from 'mongoose';

const petSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  type: { type: String, required: true },
  owner: { type: String, required: true },
});

const Pet = model('Pet', petSchema);

export default Pet;