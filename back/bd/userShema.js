const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost:27017/Card',
{useNewUrlParser: true, useUnifiedTopology: true})

const User = mongoose.model('User',{
  login: {type:String},
  email:{type:String},
  password:{type:String}
})

module.exports = User
