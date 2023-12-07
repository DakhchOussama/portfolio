import nodemailer from 'nodemailer';
import dotenv from 'dotenv';


dotenv.config();

export default async function POST(req: any, res: any){
    if (req.method === 'POST')
    {
        const {email, mobile, message} = req.body;

        const Transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'portfolio-email@example.com',
            subject: 'Get In Touch',
            text: `Email: ${email}\n Mobile: ${mobile} Message: ${message}`,
        };

        try{
            await Transport.sendMail(mailOptions);
            res.status(200).json({success: true});
        }catch(error){
            res.status(400).json({success: false, error: 'Error sending'});
        }
    }
    else{
        res.status(400).json({error: 'Method Not Working'})
    }
}