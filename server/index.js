const express = require('express');
const app = express();
const port = 5000;

const nodemailer = require('nodemailer');

require('dotenv').config();

app.use(express.json());

app.post('/contact-us', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        } //npm install dotenv
    });

    const mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL_USER,
        subject: req.body.subject,
        text: req.body.message,
        sender: req.body.email,
        replyTo: req.body.email
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.send("successfully sent email to " + mailOptions.to);
        }
    });
});

app.listen(port, () => {
    console.log('Currently listening on port ' + port);
});

