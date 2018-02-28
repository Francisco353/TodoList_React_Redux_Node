const mongoose = require("mongoose");
const Board = mongoose.model("board");
const Table = mongoose.model("table");

module.exports = app => {
  app.get("/api/boards/:userId", async (req,res) => {
    const {userId} = req.params;
    const boards = await Board.find({_user: userId});
    res.send(boards);
  });

  app.post("/api/boards",async (req,res) => {
    const {title,userId} = req.body;
    const board = new Board({
      title,
      _user: userId
    });
    const response = await board.save();

    const tasksdoneTable = new Table({status:"Done",_board:response._id});
    const notStatedTasksTable = new Table({status:"Pending",_board:response._id});
    const inProgressTasksTable = new Table({status:"Not Started",_board:response._id});
    await tasksdoneTable.save();
    await notStatedTasksTable.save();
    await inProgressTasksTable.save();
    res.send(response);
  });

  app.delete("/api/boards/:boardId",async (req,res)=>{
    const {boardId} = req.params;
    Board.findByIdAndRemove(boardId, function(err){
      if(err){
        return res.status(500).send();
      }
      return res.status(200).send();
    });
  });

  app.put("/api/board/:boardId/:tasks",async (req,res) => {
      const {boardId,tasks} = req.params;
    });
};
