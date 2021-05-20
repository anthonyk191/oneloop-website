const express = require('express');
const app = express();
const port = 5000;

const nodemailer = require('nodemailer');
const markdown = require('nodemailer-markdown').markdown;
const fetch = require('node-fetch');

require('dotenv').config();

app.use(express.static(__dirname + '/public'));

app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    } //npm install dotenv
});
transporter.use('compile', markdown());

app.post('/work-with-us', (req, res) => {
    console.log(req.body);

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
    
    const mailOptions = {
        from: `${req.body.name} [${req.body.email}] <zoomerinsight@gmail.com>`,
        to: 'zoomerinsight@gmail.com',
        subject: req.body.subject,
        replyTo: req.body.email,
        markdown: [
            `## name: ${req.body.name}`,
            `year: ${req.body.year}`,
            `major: ${req.body.major}`,
            `uc-davis-email: ${req.body.email}`,
            `gpa: ${req.body.gpa}`,
            `hours-to-commit: ${req.body.hours}`,
            `subteams-interested:`,
            `${req.body['subteams-interested'][0]}`,
            `software-familiar: `,
            `${req.body['software-familiar'][0]}`,
            `programming-languages-familiar:`,
            `${req.body['programming_languages-familiar'][0]}`,
            `reference:`,
            `${req.body.reference[0]}`,
        ].join('\n')
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
