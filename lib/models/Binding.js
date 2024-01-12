import { Schema, model, models } from "mongoose";

const BindingSchema = new Schema({
  name: {
    type: String,
  },

  tag: {
    type: String,
  },

  size: {
    type: Array,
  },

  color: {
    type: Array,
  },

  age: {
    type: String,
  },

  bindingWeight: {
    type: String,
  },

  category: {
    type: String,
  },

  range: {
    type: String,
  },

  image: {
    type: Array,
  },

  overview: {
    type: String,
  },
});

const Binding = models.Binding || model("Binding", BindingSchema);

export default Binding;
