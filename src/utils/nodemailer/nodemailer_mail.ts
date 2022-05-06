import { transport } from "../../senderEmail";
import { MailAdapter, SendMailSchema } from "../mail_adapter";


export class NodeMailerAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailSchema) {
        await transport.sendMail({
            from: "Equipe Feedget <teste@feedget.com>",
            to: "Guigo <guilherme.peyflo@gmail.com>",
            subject,
            html: body
        })
    }
}