const mongoose = require("mongoose");
const Task = mongoose.model("task");

module.exports = app => {
  app.get("/api/tasks/:tableId", async (req,res) => {
    const {tableId} = req.params;
    const tasks = await Task.find({_table:tableId});
    res.send(tasks);
  });

  app.post("/api/tasks",async (req,res) => {
    const {title,tableId} = req.body;
    const task = new Task({
      title,
      _table: tableId
    });
    const response = await task.save();
    res.send(response)
  });

  app.delete("/api/tasks/:taskId",async (req,res)=>{
    console.log("DELETE");
    const {taskId} = req.params;
    Task.findByIdAndRemove(taskId, function(err){
      if(err){
        return res.status(500).send();
      }
      return res.status(200).send();
    });
  });
};
