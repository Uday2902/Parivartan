const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const User = require("./model/User");
const fs = require("fs");
const path = require('path')
// const Ngo = require("./model/Ngo");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static("views"));

app.use(express.static('public'));

mongoose.connect("mongodb://0.0.0.0/27017");
// console.log("Connected Successfully...")

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "Now you can buy anything",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// *******************
// ***** ROUTES ******
// *******************

// Showing Home Page
app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/volunteer", (req, res) => {
  res.render("volunteerlogin");
});

app.get("/ngo", (req, res) => {
  res.render("ngologin");
});

app.post("/volunteer/register", async (req, res) => {
  const currentUser = await User.create({
    type: "volunteer",
    username: req.body.username,
    email: req.body.email,
    dob: req.body.dob,
    userpassword: req.body.userpassword,
  });
  res.send(currentUser);
});

app.post("/volunteer/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (user) {
      //check if password matches
      const result = req.body.userpassword === user.userpassword;
      if (result) {
        res.render("ngodashboard");
      } else {
        res.status(400).json({ error: "password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.post("/ngo/login", async (req, res) => {
  try {
    const currentNgo = await User.findOne({ email: req.body.email });
    console.log("current - " + currentNgo);
    if (currentNgo) {
      //check if password matches
      const result = req.body.ngopassword === currentNgo.ngopassword;
      if (result) {
        res.render("scroll");
      } else {
        res.status(400).json({ error: "password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.post("/ngo/register", async (req, res) => {
  const currentNgo = await User.create({
    type: "ngo",
    ngoname: req.body.ngoname,
    ngoid: req.body.ngoid,
    email: req.body.email,
    ngopassword: req.body.ngopassword,
  });
  res.send(currentNgo);
});

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("landing");
  });
});

  app.post("/ngo/login/campaigns", (req, res) => {
    console.log("here1")
    console.log(req.body);
    const newObj = {
      name: req.body.name,
      date: req.body.date,
      profileSrc: req.body.profileSrc,
      title: req.body.title,
      description: req.body.description,
    };
    // console.log("here2")
    // const myJSON = JSON.stringify(newObj);
    const data = JSON.parse(fs.readFileSync("data.json","utf-8"));
    // console.log("here3")
    data.push(newObj);
    // console.log("here4")
    const updatedData = JSON.stringify(data);
    // console.log("here5")
    fs.writeFileSync("data.json", updatedData);
    // console.log("here5")
    res.render('campaigns');
    // res.render('campaigns');
  });

app.listen(PORT, () => {
  console.log(`Server is running on : http://localhost:/${PORT}`);
});
