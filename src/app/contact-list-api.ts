import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "maruf",
  port: 5432,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, phone, businessname, description } = req.body;

  // SAVE DATA TO POSTGRESQL
  const client = await pool.connect();
  try {
    await client.query(
      "INSERT INTO contacts (name, email, phone, businessname, description) VALUES ($1, $2, $3, $4, $5)",
      [name, email, phone, businessname, description]
    );
  } catch (error) {
    console.error("Error inserting data into PostgreSQL:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  } finally {
    client.release();
  }

  // SEND EMAIL
  const transporter = nodemailer.createTransport({
    // CONFIG HERE
    // port: 465,
    service: "gmail",
    auth: {
      user: "marufcdda319@gmail.com",
      pass: "occc shew onzf eidl",
    },
  });

  const mailOptions = {
    from: "marufcdda319@gmail.com",
    to: "yeasir@cdda.io",
    subject: "Thank you for contacting us!",
    text: "We have received your inquiry and will get back to you soon.",
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
