var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/home", function(req, res) {
    res.render("index");
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.get("/services", function(req, res) {
    res.render("services");
});

app.get("/contacts", function(req, res) {
    res.render("contacts");
});

app.get("*", function(req, res) {
    res.render("index");
});

app.listen(4200, function() {
    console.log("serving Alice, my queen");
});