import mongoose from "mongoose";

const cacheSchema = new mongoose.Schema({
  key: {
    type: Number,
    required: true,
    unique: true,
  },
  value: {
    type: String,
    required: true,
  },
});

export const Cache = mongoose.model("Cache", cacheSchema);
