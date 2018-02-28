const mongoose = require("mongoose");
const {Schema} = mongoose;


const boardSchema = new Schema({
  title: {type: String, unique: true},
  _user: {type: Schema.Types.ObjectId,ref:"user"}
});

mongoose.model("board",boardSchema);
