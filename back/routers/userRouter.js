const express = require("express");
const User= require("../bd/userShema");

const router = express.Router();

router
  .route("/")
  // .get(async (req, res) => {
  //   const todos = await Todo.find();
  //   res.status(200).json(todos);
  // })

  .post(async (req, res) => {
    const { login, email, password } = req.body;
    if (login && email && password) {
      const newUser = await User.create({login,email,password});
      res.status(200).json(newUser);
    } else {
      res.status(400).json({ createTodo: false });
    }
  })

  // .delete(async (req,res) => {
  //   const delTodo = await Todo.findByIdAndDelete(req.body.id)
  //   if(delTodo){
  //     res.status(200).json(delTodo)
  //   } else {
  //     res.status(400).json({delete:false})
  //   }
  // })
  
  //  .put(async(req,res) => {
  //    const renameTodo = await Todo.findById(req.body.id)
  //    renameTodo.title = req.body.title
  //    await renameTodo.save()
  //    if(renameTodo){
  //    res.status(200).json(renameTodo)
  //    } else {
  //      res.status(400).json({rename:false})
  //    }
  //  })

   

   


module.exports = router;
