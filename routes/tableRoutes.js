const mongoose = require("mongoose");
const Table = mongoose.model("table");

module.exports = app => {
  app.get("/api/tables/:boardId", async (req,res) => {
    const {boardId} = req.params;
    const tables = await Table.find({_board: boardId});
    res.send(tables);
  });
};
