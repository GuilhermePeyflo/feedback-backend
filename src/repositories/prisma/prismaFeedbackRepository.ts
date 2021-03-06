import { prisma } from "../../prisma"
import { FeedbackSchema, FeedbacksRepository } from "../feedbackRepository"


export class PrismaFeedbackRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot }: FeedbackSchema) {
        return await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        })
    }

}