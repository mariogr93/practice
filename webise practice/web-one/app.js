const express = require("express");
const mongooes = require("mongoose");
const path = require('path');

const connectionLink = require("./Connection");
const postsRoute = require("./routes/Post.routes");

const app = express();
app.listen(5000);
app.use(express.static('public'));

mongooes.connect(connectionLink, { useUnifiedTopology: true }, () =>
  console.log("connected to db")
);



app.use("/posts", postsRoute);

app.get('/', (req, res)=>{
  res.send('<h1>hola</h1>')

  console.log('llego algo');
})






