import express from "express"
import { prisma } from "../prisma"
import { PrismaFeedbackRepository } from "../repositories/prisma/prismaFeedbackRepository"
import { transport } from "../senderEmail"
import { SubmitFeedbackCase } from "../use_cases/submit_feedbacks"
import { NodeMailerAdapter } from "../utils/nodemailer/nodemailer_mail"


export const route = express.Router()

route.post("/feedback", async (req, res) => {
    const {type, comment, screenshot } = req.body

    const prismaRepository = new PrismaFeedbackRepository
    const nodeMail = new NodeMailerAdapter
    const submitNewFeedback = new SubmitFeedbackCase(prismaRepository, nodeMail) 

    await submitNewFeedback.execute({
        type,
        comment,
        screenshot
    })



    return res.status(201).json("OK")
})