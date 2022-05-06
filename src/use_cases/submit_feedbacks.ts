import {FeedbacksRepository} from "../repositories/feedbackRepository"
import { MailAdapter } from "../utils/mail_adapter"

interface SubmitFeedbackRequest {
    type: string
    comment: string
    screenshot?: string
}


export class SubmitFeedbackCase {
    constructor (
        private feedbackRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter
    ) {}

    async execute(request: SubmitFeedbackRequest) {
        const { type, comment, screenshot } = request

        if (!type) {
            throw new Error("Type is Required")
        }

        await this.feedbackRepository.create({
            type,
            comment,
            screenshot
        })


        await this.mailAdapter.sendMail({
            subject: "Novo Feedback",
            body: [
                `<div style="font-family: snas-serif; font-size: 16px;"></div>`,
                `<p>Tipo do Feedback: ${type}</p>`,
                `<p>Comentário do Feedback: ${comment}</p>`,
            ].join("\n")
        })
    }

}