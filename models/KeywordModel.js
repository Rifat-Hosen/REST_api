const mongoose = require("mongoose");
const keywordSchema = new mongoose.Schema(
  {
    keyword: {
      type: String,
      required: [true, "A keyword must have a name"],
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
const Keyword = mongoose.model("Keyword", keywordSchema);
module.exports = {
    Keyword
}