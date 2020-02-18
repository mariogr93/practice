const express = require('express');
const PostSchema = require('../models/Post.model') 

const router = express.Router();

router.get("/", (req, res) => {
  res.send("esto es del get");
});

router.post('/', (req, res) => {
  res.send("esto es del post");
  console.log('llego algo');
});

module.exports = router;
  