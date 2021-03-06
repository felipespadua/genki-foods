const express = require('express');
const router  = express.Router();
const passport = require("passport");
const User = require("../models/User")
const Lead = require("../models/Lead")
const googlekey = process.env.APIKEY;

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/admin', (req, res, next) => {
  res.render('login');
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/admin");
});


router.post('/send/form', (req, res, next) => {
  const { name,  email } = req.body;
  console.log("bateu")
  Lead.findOne({email})
    .then(lead => {
      if(lead == null){
        const newLead = new Lead({
          name,
          email,
        }); 
        newLead.save()
          .then( lead => {
            console.log("Lead salva com sucesso")
            res.render("index", { message: "Cadastro realizado com sucesso!", erro: false}) 
          } )
          .catch( err => console.log(`Ocorreu um erro ao criar lead: ${err}`))

      }else{
        
        res.render("index", { message: "Email já cadastrado na nossa base.", erro: true}) 
      }
    })
 
});


router.post("/admin", passport.authenticate("local", {
  successRedirect: "/admin/dashboard",
  failureRedirect: "/admin",
  failureFlash: true,
  passReqToCallback: true
}));

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/admin')
  }
}


router.get('/api/getLeads',ensureAuthenticated, (req, res, next) => {
  
  Lead.find()
  .then( leads => { 
    res.json(translateLeads(leads))
  })
  .catch( err => {
    console.log("Ocorreu um erro ao encontrar as partidas: ", err)
  })
  
});

router.get('/admin/dashboard', ensureAuthenticated, (req, res, next) => {
  const user = req.user;
  const username = req.user.username;
  Lead.find()
    .then( leads => { 
      res.render('dashboard', { username, googlekey } )
    })
    .catch( err => {
      console.log("Ocorreu um erro ao encontrar as partidas: ", err)
    })
    res.render('dashboard', { username, googlekey } )
});
router.get('/test', (req, res, next) => {

      res.render('test')


});



const translateLeads = (leads) => {
  let finalLeads = { 
    total: leads.length,
    totalNotFiltered: leads.length,
    rows: []
  }
  leads.forEach(lead => {
    let leadObj = {
      name: lead.name,
      email: lead.email
    }
    finalLeads.rows.push(leadObj)
     
  })
  return finalLeads
}



module.exports = router;
