import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  try {
    const nodemailer = require('nodemailer')
    const { name, email, phone, comment } = await req.json();

    // Validar los datos
    if (!name || !email || !comment) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    // Configurar el transporte de nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
      },
      // logger: true, // Enable logging
      // debug: true,  // Enable debugging
  });

  //   transporter.verify(function (error: any, success:any) {
  //     if (error) {
  //         console.error("SMTP connection error:", error);
  //     } else {
  //         console.log("SMTP server is ready to send emails");
  //     }
  // });

    // Opciones del correo
    const mailOptions = {
      from: `"Website Contact Form" <${process.env.EMAIL}>`,
      to: "info@danieletienne.com",
      replyTo: email,
      subject: `Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${comment}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p>${comment}</p>`,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}

/* export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  
  const nodemailer = require('nodemailer')

  const { name, email, phone, comment } = req.body;

  if (!name || !email || !comment) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: false,
      auth: {
        user: process.env.EMAIL, // Tu correo
        pass: process.env.EMAIL_PASSWORD, // Tu contraseña
      },
    });

    const mailOptions = {
      from: `"Website Contact Form" <${process.env.EMAIL}>`,
      to: "info@danieletienne.com",
      replyTo: email,
      subject: `Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${comment}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p>${comment}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
} */