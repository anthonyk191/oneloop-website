const express = require('express');
const app = express();
const port = 5000;

const nodemailer = require('nodemailer');
const fetch = require('node-fetch');

require('dotenv').config();

app.use(express.static(__dirname + '/public'));

app.use(express.json());

app.post('/work-with-us', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        } //npm install dotenv
    });

    const mailOptions = {
        from: `${req.body.name} [${req.body.email}] <zoomerinsight@gmail.com>`,
        to: process.env.EMAIL_USER,
        subject: req.body.subject,
        text: req.body.message,
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

app.post('/join-us', (req, res) => {

});

app.post('/captcha', (req, res) => {
    console.log(req.body.code);

    fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_KEY}&response=${req.body.code}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json()).then(data => {
        console.log(data);
    })

    res.send('ok');
});

app.listen(port, () => {
    console.log('Currently listening on port ' + port);
});
