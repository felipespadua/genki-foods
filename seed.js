require('dotenv').config();
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const mongoose = require('mongoose');
const Lead = require('./models/Lead');
const User = require('./models/User');

let leads = [
  {
    name: "Felipe Sekkar",
    email: "felipespadua@gmail.com"
  },
  {
    name: "Francisca Portugal",
    email: "franciscaportugal@gmail.com"
  },
  {
    name: "Fernanda Montenegro",
    email: "fernandamontenegro@gmail.com"
  },
  {
    name: "Andressa Montenegro",
    email: "andressamontenegro@gmail.com"
  },
  {
    name: "Fernanda Raimundo",
    email: "raimundo@gmail.com"
  },
  {
    name: "Alessandro Silva",
    email: "alesilva@hotmail.com"
  },
  {
    name: "Ricardo Salles",
    email: "risalles@hotmail.com"
  },
  {
    name: "Rodolfo Jesus",
    email: "rojesus@yahoo.com"
  },
  {
    name: "Jonaina Ricardo",
    email: "jori@yahoo.com"
  },
  {
    name: "Alexandre Padua",
    email: "alepadua@gmail.com"
  },
  {
    name: "Sofia Fernandes",
    email: "sofiafefernandes@hotmail.com"
  },
  {
    name: "Mario Alvial",
    email: "malvial@gmail.com"
  },
  {
    name: "Rodrigo Santoro",
    email: "rosantoro@gmail.com"
  },
  {
    name: "Alice Araujo",
    email: "alicearujo@yahoo.com"
  },
  {
    name: "Paula Alcevejo",
    email: "paulcevejo@gmail.com"
  },

]
let password = "1234"
const salt = bcrypt.genSaltSync(bcryptSalt);
const hashPass = bcrypt.hashSync(password, salt);
let user = {
  username: "admin",
  password: hashPass
}
mongoose
.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
.then(x => {
  Lead.collection.drop();
  let createLeads = leads.map(lead => {
      const newLead = new Lead(lead)
      return newLead.save()
  })
  Promise.all(createLeads)
  .then(result=> {
    console.log("Leads criados com sucesso")
  })
  .catch(err => console.log(err))

  const newUser = new User(user)
  newUser.save()
    .then(user => console.log("Usuario criado com sucesso"))
    .catch(err => console.log(err))
})
.catch(err => {
  console.error('Error connecting to mongo', err)
});
