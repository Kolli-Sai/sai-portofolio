const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const sendEmail = async (req, res) => {
  const { email, name, message } = req.body;
  console.log(`send email ${email} ${name} ${message} called`);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
    });

    const mailGenerator = new Mailgen({
      theme: "default", // Use the "salted" theme for a more professional look
      product: {
        name: "Kolli Sai's Portfolio",
        link: "https://sai-portofolio.vercel.app/", // Replace with the actual deployed link of your portfolio
      },
    });

    // Email sent to the visitor
    const visitorEmail = {
      body: {
        name: name,
        intro: "Thank you for your interest in exploring my portfolio!",
        action: {
          instructions: "To view my portfolio, please click the link below:",
          button: {
            color: "#22BC66",
            text: "View Portfolio",
            link: "https://sai-portofolio.vercel.app/", // Replace with the actual deployed link of your portfolio
          },
        },
        outro:
          "If you have any questions or feedback, feel free to reach out to me. Looking forward to connecting with you!",
      },
    };

    const visitorEmailTemplate = mailGenerator.generate(visitorEmail);

    // Send email to the visitor
    const visitorEmailOptions = {
      from: process.env.USER_EMAIL,
      to: email,
      subject: `Thank you for your interest in Kolli Sai's Portfolio`,
      html: visitorEmailTemplate,
    };

    // Email sent to yourself (you can change the content to your preference)
    const yourEmail = {
      body: {
        name: "Kolli Sai",
        intro: `You have received a new message from ${name}.`,
        table: {
          data: [
            {
              item: "Name:",
              description: name,
            },
            {
              item: "Email:",
              description: email,
            },
            {
              item: "Message:",
              description: message,
            },
          ],
        },
        outro:
          "Please respond to this message promptly. Thank you for using the contact form on your portfolio website.",
      },
    };

    const yourEmailTemplate = mailGenerator.generate(yourEmail);

    // Send a copy of the email to yourself
    const yourEmailOptions = {
      from: process.env.USER_EMAIL,
      to: "saik98187@gmail.com", // Replace with your own email address
      subject: `New message received from ${name}`,
      html: yourEmailTemplate,
    };

    // Send both emails concurrently using Promise.all
    await Promise.all([
      transporter.sendMail(visitorEmailOptions),
      transporter.sendMail(yourEmailOptions),
    ]);

    res.status(201).json({
      message: "Email sent successfully",
      user: {
        name: name,
        email: email,
        message: message,
      },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "An error occurred while sending the email" });
  }
};

module.exports = {
  sendEmail,
};
