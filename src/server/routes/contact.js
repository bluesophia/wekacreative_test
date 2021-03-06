var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config');
var inLineCss = require('nodemailer-juice');

//setting transport
let transport = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: false,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  },
  tls: {
    rejectUnauthorized:false
  }
}

let transporter = nodemailer.createTransport(transport)
transporter.use('compile', inLineCss());

//console.log
transporter.verify((error, success)=> {
  if(error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});


//router post
router.post('/post', (req, res, next) => {
  let name = req.body.name
  let email = req.body.email
  let phone = req.body.phone
  let message = req.body.message
  // let image = img
  //html contents
  // let content = `name: ${name} \n email: ${email} \n message: ${message}`
  let html = `<style>

        body{
            color: black !important;
            margin: 0 auto;
            padding: 0;
            width: 60%;
            text-decoration: none;
        }
        a {
          text-decoration: none;
        }
        a:hover {
            background-color:#FFA91F;
        }
        link {
          text-decoration: none;
        }
        link:hover {
            background-color:#FFA91F;
        }
        h1 {
            margin: auto;
            width: 100%;
            margin-bottom: 10%;
            margin-top: 10%;
            text-align: center;
        }
        h3{
          color: black;
        }
        p{
          color: black;
        }
        .yellowBox {
            background-image: linear-gradient(#AEE8C1, #98D0AA);
            height: auto;
            border-radius: 5px;
            padding: 5%;
            padding-bottom: 3px;
            z-index: -1;
        }
        .whiteBox {
            background-color: #fff;
            width: 80%;
            height: auto;
            border-radius: 5px;
            margin: 0 auto;
            padding: 10%;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)s;
        }
        .phone {
            display: inline;
            float: left;
        }
        .emailBox {
            float: left;
            margin-left: 50px;
        }
        .messageBox {
            width: 100%;
            clear: left;
            padding-top: 10px;
        }
        .copyright {
          color: #fff !important;
          float: center;
          text-align: center;
          font-size: 12px;
          
      }
        </style>
      <body>
        <h1>Mail from Contact form</h1>
    <!-- yellow box -->
    <div class="yellowBox">
        <div class="whiteBox">
         <!-- line1 -->
        <div>
            <h3>Full Name</h3>
            <p>${name}</p>
        </div>
        <!-- line2 -->
        <div>
            <div class="phone">
                <h3>Phone Number</h3>
                <p>${phone}</p>
            </div>
            <div class="emailBox">
                <h3>Email</h3>
                <p class="link">${email}</p>
            </div>
        </div>
         <!-- line3 -->
         <div class="messageBox">
            <h3>Message</h3>
            <p>${message}</p>
         </div>
        </div>
        <div class="bottomBox">
                <p class="copyright">Scops IT Solution Ltd ⓒ 2018. All rights reserved</p>
          </div>
    </div>
</body>
`
let mail = {
  from: name,
  to: 'imsophia0313@gmail.com',
  subject: 'New message from contact form',
  html: html
}

//mail status
transporter.sendMail(mail, (err, data)=> {
  if(err) {
    res.json({
      msg: 'fail'
    })
  } else {
    res.json({
      msg: 'success'
    })
  }
})
})


module.exports= router;