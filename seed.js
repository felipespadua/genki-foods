require('dotenv').config();

const mongoose = require('mongoose');
const Lead = require('./models/Lead');

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

mongoose
.connect(process.env.MONGODB_URILOCAL, {useNewUrlParser: true})
.then(x => {
  let createLeads = leads.map(lead => {
      const newLead = new Lead(lead)
      return newLead.save()
  })
  Promise.all(createLeads)
  .then(result=> {
    console.log("Leads criados com sucesso")
  })
  .catch(err => console.log(err))
})
.catch(err => {
  console.error('Error connecting to mongo', err)
});
