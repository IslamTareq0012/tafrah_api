var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  json = {
    "meetups": [
      { "name": "Cloud", "descreption": "descreption 1", "Date": Date.now() },
      { "name": "DevOps", "descreption": "descreption 2", "Date": Date.now() },
      { "name": "Cross platfrom", "descreption": "descreption 3", "Date": Date.now() },
      { "name": "Web Development", "descreption": "descreption 4", "Date": Date.now() },
      { "name": "MEAN stack", "descreption": "descreption 5", "Date": Date.now() }]
  };
  return res.status(200).send({ json, success: true });
});

module.exports = router;
