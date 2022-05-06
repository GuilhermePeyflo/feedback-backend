export interface SendMailSchema {
    subject: string
    body: string
}


export interface MailAdapter {
    sendMail: (data: SendMailSchema) => Promise<void>
}