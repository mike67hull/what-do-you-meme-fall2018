const math = require('./math');
const express = require('express');
var something = add(2, 2);

console.log("1 + 2 = " + something);

const app = express();

app.get("/add", function(req, res){
    var something = math.add(2,2);
    res.send(something);
});
app.use("/", function(req, res, next){
    res.send("hello world");
});

app.listen(3000);