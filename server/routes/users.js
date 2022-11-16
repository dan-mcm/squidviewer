var express = require('express');
var router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv').config();

const squidAPI = process.env.API_URL || '';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/squiduser', function(req, result, next) {
  axios.get(squidAPI)
  .then(res => {
    return result.send(res.data)
  })
  .catch(err => {
    console.log(err)
  })
});

module.exports = router;
