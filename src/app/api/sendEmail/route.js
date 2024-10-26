import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, mobile, email, company, address, message } = await request.json();

    // Set up the SMTP transporter using Elastic Email
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,  // Your Elastic Email username stored in .env.local
        pass: process.env.EMAIL_PASSWORD   // Your Elastic Email password stored in .env.local
      }
    });

    // Define the email options
    await transporter.sendMail({
      from: process.env.EMAIL_USER,    // Your sender email
      to: process.env.EMAIL_USER,        // Your recipient email
      subject: "Query",
      html: `
        <p>Name: ${name}</p>
        <p>Phone: ${mobile}</p>
        <p>Email: ${email}</p>
        <p>Company: ${company}</p>
        <p>Address: ${address}</p>
        <p>Message: ${message}</p>
      ` // The body of the email in HTML format
    });

    // Send a success response
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {    
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
