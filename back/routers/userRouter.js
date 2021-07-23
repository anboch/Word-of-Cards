const express = require("express");
const User = require("../bd/userShema");

const router = express.Router();

router
  .route("/signup")
  // .get(async (req, res) => {
  //   const todos = await Todo.find();
  //   res.status(200).json(todos);
  // })

  .post(async (req, res) => {
    const { login, email, password } = req.body;
    if (login && email && password) {
      const newUser = await User.create({ login, email, password });
      res.status(200).json(newUser);
    } else {
      res.status(400).json({ createTodo: false });
    }
  });

router
  .route("/login")
  // .get(async (req, res) => {
  //   const todos = await Todo.find();
  //   res.status(200).json(todos);
  // })

  .post(async (req, res) => {
    const { login, password } = req.body;
    if (login && password) {
      const loginUser = await User.findOne({ login, password });
      if (loginUser) {
        res.status(200).json(loginUser);
      } else {
        res.status(200).json({ userInBase: false });
      }
    } else {
      res.status(400).json({ loginUser: false });
    }
  });


// .post(async (req, res) => {
//   const { login, email, password } = req.body;
//   if (login && email && password) {
//     const newUser = await User.create({login,email,password});
//     res.status(200).json(newUser);
//   } else {
//     res.status(400).json({ createTodo: false });
//   }
// })
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
