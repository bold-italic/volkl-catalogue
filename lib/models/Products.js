import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
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

  color: {
    type: Array,
  },

  bindingWeight: {
    type: String,
  },

  bindingCategory: {
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

  featured: {
    type: Boolean,
  },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
