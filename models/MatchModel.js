const mongoose = require("mongoose");
const matchSchema = new mongoose.Schema({
  //    keyword would reference to the keyword model
  keyword: {
    type: mongoose.Schema.ObjectId,
    ref: "Keyword",
    required: [true, "A match must have a keyword"],
  },
  id: {
    type: Number,
    required: [true, "A match must have an id"],
  },
  userId: {
    type: Number,
    required: [true, "A match must have a userId"],
  },
  title: {
    type: String,
    required: [true, "A match must have a title"],
  },
  body: {
    type: String,
    required: [true, "A match must have a body"],
  },
});

const Match = mongoose.model("Match", matchSchema);
module.exports = {
  Match,
};  