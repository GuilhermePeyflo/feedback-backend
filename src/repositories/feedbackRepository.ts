export interface FeedbackSchema {
    type: string
    comment: string
    screenshot?: string
}

export interface FeedbacksRepository {
    create: (data: FeedbackSchema) => Promise<void>
}