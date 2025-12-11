import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message, propertyName, propertyLocation, propertyPrice, source } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Name, email, and phone are required' });
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'msestates99@gmail.com',
      replyTo: email,
      subject: `New Quote Request${propertyName ? ` - ${propertyName}` : ''} | MS Estates`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1a365d 0%, #2d4a7c 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: #c9a96e; margin: 0; font-size: 24px;">New Quote Request</h1>
            <p style="color: #ffffff; margin: 10px 0 0 0; opacity: 0.9;">MS Estates - Property Enquiry</p>
          </div>
          
          <div style="background: #f8f6f3; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #1a365d; margin-top: 0; border-bottom: 2px solid #c9a96e; padding-bottom: 10px;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #666; width: 120px;"><strong>Name:</strong></td>
                <td style="padding: 10px 0; color: #1a365d;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; color: #1a365d;"><a href="mailto:${email}" style="color: #c9a96e;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666;"><strong>Phone:</strong></td>
                <td style="padding: 10px 0; color: #1a365d;"><a href="tel:${phone}" style="color: #c9a96e;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666;"><strong>Source:</strong></td>
                <td style="padding: 10px 0; color: #1a365d;">${source || 'Website'}</td>
              </tr>
            </table>
            
            ${propertyName ? `
            <h2 style="color: #1a365d; margin-top: 30px; border-bottom: 2px solid #c9a96e; padding-bottom: 10px;">Property Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #666; width: 120px;"><strong>Property:</strong></td>
                <td style="padding: 10px 0; color: #1a365d;">${propertyName}</td>
              </tr>
              ${propertyLocation ? `
              <tr>
                <td style="padding: 10px 0; color: #666;"><strong>Location:</strong></td>
                <td style="padding: 10px 0; color: #1a365d;">${propertyLocation}</td>
              </tr>
              ` : ''}
              ${propertyPrice ? `
              <tr>
                <td style="padding: 10px 0; color: #666;"><strong>Price:</strong></td>
                <td style="padding: 10px 0; color: #c9a96e; font-weight: bold;">${propertyPrice}</td>
              </tr>
              ` : ''}
            </table>
            ` : ''}
            
            ${message ? `
            <h2 style="color: #1a365d; margin-top: 30px; border-bottom: 2px solid #c9a96e; padding-bottom: 10px;">Message</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #c9a96e;">
              <p style="color: #333; margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
              <p style="color: #888; font-size: 12px; margin: 0;">
                This enquiry was submitted via the MS Estates website.
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to customer
    const confirmationMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for your enquiry - MS Estates',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1a365d 0%, #2d4a7c 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: #c9a96e; margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
            <p style="color: #ffffff; margin: 10px 0 0 0; opacity: 0.9;">We've received your enquiry</p>
          </div>
          
          <div style="background: #f8f6f3; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="color: #333; line-height: 1.8; margin-top: 0;">
              Thank you for reaching out to MS Estates. We have received your enquiry${propertyName ? ` regarding <strong>${propertyName}</strong>` : ''} and our team will get back to you within 24 hours.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #c9a96e;">
              <h3 style="color: #1a365d; margin-top: 0;">What happens next?</h3>
              <ul style="color: #666; line-height: 1.8; padding-left: 20px;">
                <li>Our property consultant will review your requirements</li>
                <li>You'll receive a call within 24 hours</li>
                <li>We'll schedule a property visit at your convenience</li>
              </ul>
            </div>
            
            <p style="color: #333; line-height: 1.8;">
              If you have any urgent queries, feel free to reach us at:<br>
              📞 <a href="tel:+919876543210" style="color: #c9a96e;">+91 98765 43210</a><br>
              📧 <a href="mailto:msestates99@gmail.com" style="color: #c9a96e;">msestates99@gmail.com</a>
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
              <p style="color: #1a365d; font-weight: bold; margin-bottom: 5px;">MS Estates</p>
              <p style="color: #888; font-size: 12px; margin: 0;">
                Your Trusted Real Estate Partner in Noida & Greater Noida
              </p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return res.status(200).json({ success: true, message: 'Quote request sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}
