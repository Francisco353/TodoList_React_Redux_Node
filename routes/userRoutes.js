const mongoose = require("mongoose");
const User = mongoose.model("user");

module.exports = app => {
  app.post("/api/createUser", async (req,res)=>{
    const {nickname,username,password} = req.body;
    const user = new User({
      nickname,
      username,
      password
    });
    const response = await user.save();
    res.send(response);
  });

  app.get("/api/findUser/:username/:password", async (req,res)=>{
    const {username,password} = req.params;
    const response = await User.find({'username':username,'password':password});
    res.send(response);
  });
}
