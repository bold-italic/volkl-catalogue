import { Schema, model, models } from "mongoose";

const PoleSchema = new Schema({
  name: {
    type: String,
  },

  overview: {
    type: String,
  },

  size: {
    type: Array,
  },

  color: {
    type: Array,
  },

  image: {
    type: Array,
  },
});

const Pole = models.Pole || model("Pole", PoleSchema);

export default Pole;
