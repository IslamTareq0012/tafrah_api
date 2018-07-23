var express = require('express');
var router = express.Router();
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
/* GET users listing. */
router.get('/', function (req, res, next) {
  var responseString = "controller logic is here !";
  res.send(responseString);
});
/* GET certain user data */
router.get('/me', expressJwt({ secret: process.env.SECRET }), function (req, res, next) {
  var responseString = "some user";
  var userData = {
    "userID": req.user._id,
    "userEmail": "test@tafrah.com",
  }
  return res.status(200).send({ userData, success: true });

});
/* POST login data email and mail*/

router.post('/login', function (req, res, next) {

  if (req.body.email == "test@tafrah.com" && req.body.password == "tafrah123456test") {
    var fakeUserID = "abcd1234";
    const token = jwt.sign({ _id: fakeUserID }, process.env.SECRET);
    return res.status(200).send({ success: true, token: token, user: { _id: fakeUserID } });
  } else {
    return res.status(403).send({ success: false, err: "Email or password are incorrect" });
  }
  //Actuall Implementation when a user model exist using mongoose ODM and bcrybt for password hashing
  /*User.findOne({ email: req.body.email.toLowerCase() }, (err, user) => {
        if (err) return res.status(500).send(err);
        if (!user) {
            return res.status(403).send({ success: false, err: "Email or password are incorrect" })
        } else {
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (isMatch) {
                    // if so - they are logged in!
                    const token = jwt.sign({ _id: user._id }, process.env.SECRET);
                    return res.send({ token: token, user: { _id: user._id }, success: true })
                } else {
                    return res.status(403).send({ success: false, err: "Email or password are incorrect" })
                }
            });
        }
    });*/
});

module.exports = router;
