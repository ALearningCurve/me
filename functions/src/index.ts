import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

import * as Mail from "nodemailer/lib/mailer";
import * as nodemailer from "nodemailer";


exports.sendMail = (req: any, res: any) => {

    if (!req.body.subject || !req.body.text) {
        res.status(422).send({
            error: {
                code: 422,
                message: "Missing arguments"
            }
        });
        return;
    }
    try {
        const mailFrom: string = functions.config().info.mail.from;
        const mailPwd: string = functions.config().info.mail.pwd;
        const mailTo: string = functions.config().info.mail.to;

        const mailOptions = {
            from: req.body.from || mailFrom,
            to: mailTo,
            subject: "Hello World",
            html: `<p>${req.body.text || "crankin 90s"}</p>`
        };

        const transporter: Mail = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // STARTTLS
            auth: {
                type: 'LOGIN',
                user: mailFrom,
                pass: mailPwd
            }
        });

        transporter
            .sendMail(mailOptions)
            .then(() => {
                res.status(200).send({
                    data: {
                        code: 200,
                        message: "Mail sent"
                    }
                });
            })
            .catch(e => {
                res.status(500).send({
                    error: {
                        code: 500,
                        message: e.toString()
                    }
                });
            });

    } catch (err) {
        console.error(err);
    }
}