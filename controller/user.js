const User = require("../model/user");
const nodemailer = require('nodemailer');
const EmailVerificationToken = require('../model/emailVerificationToken');

exports.create = async (req, res) => {
    const { name, email, password } = req.body;

    const oldUser = await User.findOne({ email })

    if(oldUser) return res.status(401).json({error: 'This email is already in use!'})

    const newUser = new User({name, email, password});

    await newUser.save();


    let OTP = ''
    for (let i = 0; i <= 5; i++) {
    const randomVal = Math.round(Math.random() * 9);
    OTP += randomVal;
    }

    const newEmailVerificationToken = new EmailVerificationToken({
    owner: newUser._id,
    token: OTP
    })

    await newEmailVerificationToken.save();

    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "44f04c357186f1",
          pass: "9db9aa490a87d9"
        }
      });

      transport.sendMail({
        from : 'verification@reviewapp.com',
        to: newUser.email,
        subject: 'Email Verification',
        html : `
            <p>Your verification OTP</p>
            <h1>${OTP}</h1>
        `
      })
    
    res.status(201).json({ message: 'Please verify your email. OTP has been sent to your email!' })
}

