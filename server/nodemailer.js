
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host:'smtp.mail.ru',
  port:'465',
  secure:true,  //для порта 465 должно быть true
   auth:{
     user:'samsimpson1994@mail.ru',
     pass:'PeW1ZkZvFDDjrLqwWiG7' // здесь пароль для рассылки
   }
},{
  from:'Mailer test<samsimpson1994@mail.ru>'
})

const mailer = message => {
  transporter.sendMail(message,(err,info) => {
  if(err) return console.log(err)
  console.log('Email',info)
  })
}

module.exports = mailer
