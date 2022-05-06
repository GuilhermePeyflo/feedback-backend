import { Feedback } from "@prisma/client"

export interface FeedbackSchema {
    type: string
    comment: string
    screenshot?: string
}

export interface FeedbacksRepository {
    create: (data: FeedbackSchema) => Promise<Feedback>
}