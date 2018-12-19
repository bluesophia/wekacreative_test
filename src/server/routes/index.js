var express = require('express');
var router = express.Router();

// const reactExpressMiddleware = require('react-express-middleware')
// const ReactComponent = require('./component.jsx')

// router.get('/message', function(req, res, next) {
//   res.json('Welcome To React');
// });

// router.all('/about', function(req, res, next) {
//   res.sendFile('build/index.html', { root: global });
// });


// router.get('*', (req, res) => {
//   res.sendFile('build/index.html', { root: global });
// });

// const home = require("../home");
const about = require("./about");
// const blog = require("../blog");
// const blogcontents = require("../blogcontents");
const support = require("./support");
const contact = require("./contact");
// const uploads = require("../uploads");
const send = require("./send");
const sendsupport = require("./sendsupport");
// const login = require("../login");
// const users = require("../users");

// router.use("/", home);
router.use("/about", about);
// router.use("/blog", blog);
// router.use("/blogcontents", blogcontents);
router.use("/support", support);
router.use("/contact", contact);
// router.use("/uploads", uploads);
router.use("/send", send);
router.use("/sendsupport", sendsupport);

// router.use("/login", login);
// router.use("/users", users);

module.exports = router;


