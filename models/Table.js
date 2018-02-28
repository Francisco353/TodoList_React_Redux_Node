const mongoose = require("mongoose");
const {Schema} = mongoose;
const Task = require("./Task");

const tableSchema = new Schema({
  status: String,
  tasks:[Task],
  _board: {type: Schema.Types.ObjectId,ref:"board"}
});

mongoose.model("table",tableSchema);
