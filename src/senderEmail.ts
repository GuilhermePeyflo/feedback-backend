import nodemailer from "nodemailer"

export const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2fe0cf4833ab79",
      pass: "0b038da4dd4016"
    }
  });