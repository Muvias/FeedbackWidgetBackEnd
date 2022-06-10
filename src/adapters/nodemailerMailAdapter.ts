import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from "./mailAdapter";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "fc14ffda43cf83",
      pass: "bc4105f1e69813"
    }
});

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Vinicius Perazza <vinicius@email.com>',
            subject,
            html: body,
        });
    };
}