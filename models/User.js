const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
  nickname: String,
  username: String,
  password: String
});

mongoose.model("user",userSchema);
