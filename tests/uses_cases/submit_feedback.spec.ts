import { SubmitFeedbackCase } from "../../src/use_cases/submit_feedbacks"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe("submit feedback", () => {
    it("should be able to submit a feedback", async () => {
        
        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "Example",
            screenshot: "foto.jpg"
        })).resolves.not.toThrow()


        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })


    it("should not be able to submit a feedback", async () => {
        await expect(submitFeedback.execute({
            type: "",
            comment: "Example",
            screenshot: "foto.jpg"
        })).rejects.toThrow()
    })
})