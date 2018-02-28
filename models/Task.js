const mongoose = require("mongoose");
const {Schema} = mongoose;

const taskSchema = new Schema({
  title: String,
  status: String,
  _table: {type: Schema.Types.ObjectId,ref:"table"}
});

mongoose.model("task",taskSchema);
