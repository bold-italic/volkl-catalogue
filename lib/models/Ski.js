import { Schema, model, models } from "mongoose";

const SkiSchema = new Schema({
  name: {
    type: String,
  },

  tag: {
    type: String,
  },

  size: {
    type: Array,
  },

  category: {
    type: String,
  },

  rocker: {
    type: String,
  },

  core: {
    type: String,
  },

  base: {
    type: String,
  },

  age: {
    type: String,
  },

  gender: {
    type: Array,
  },

  skiingLevel: {
    type: Array,
  },

  image: {
    type: Array,
  },

  overview: {
    type: String,
  },

  featured: {
    type: Boolean,
  },
});

const Ski = models.Ski || model("Ski", SkiSchema);

export default Ski;
