const nodemailer = require('nodemailer')

const id = process.env.GMAIL_ID
const sk = process.env.GMAIL_SK
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: id,
    pass: sk,
  },
})

export default function handler(req, res) {
  const mailOptions = {
    from: process.env.GMAIL_ID,
    to: 'machooper9@gmail.com',
    subject: `Message from ${req.body.name}, website contact form`,
    html: `
      Name: ${req.body.name} <br/>
      Email: <a href='mailto:${req.body.email}'>${req.body.email}</a> <br/>
      Message: ${req.body.message}
    `,
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) console.log(error)
  })

  res.status(200).json({ Success: 'Message sent' })
}
