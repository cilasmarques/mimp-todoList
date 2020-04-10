const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const { host, port, user, pass } = require('../../config/mail.json');

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass }
});

let handlebarOptions = {
    viewEngine: {
        extName: '.html',
        partialsDir: path.resolve('./src/resources/mailTemplate/'),
        layoutsDir: path.resolve('./src/resources/mailTemplate/'),
        defaultLayout: 'forgot_password.html'
    },
    viewPath: path.resolve('./src/resources/mailTemplate/'),
    extName: '.html'
};

transport.use('compile', hbs(handlebarOptions));

module.exports = transport;