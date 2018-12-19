const router = require("express").Router();

// const home = require("../home");
const about = require("../about");
// const blog = require("../blog");
// const blogcontents = require("../blogcontents");
const support = require("../support");
const contact = require("../contact");
// const uploads = require("../uploads");
const send = require("../send");
const sendsupport = require("../sendsupport");
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