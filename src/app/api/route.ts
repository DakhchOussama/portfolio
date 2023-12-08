import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import {NextResponse} from "next/server";

dotenv.config();

interface dataDto {
  "email": string,
  "mobile": string,
  "message": string
}

export async function POST(req: Request, res: any){
        if (req.method === 'POST')
        {
            const EMAIL_USER = process.env;
          console.log('Im here : ', EMAIL_USER);
        //   console.log('Im here : ', process.env);
          const rawData: any = await req.json();
          const data: dataDto = {
            email: rawData.email,
            mobile: rawData.mobile,
            message: rawData.message,
            };
            const {email, mobile, message} = data;

            const Transport = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.NEXT_PUBLIC_EMAIL_USER,
                    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
                },
            });
            const mailOptions = {
                from: process.env.NEXT_PUBLIC_EMAIL_USER,
                to: 'portfolio-email@example.com',
                subject: 'Get In Touch',
                text: `Email: ${email}\n Mobile: ${mobile} Message: ${message}`,
            };
            try{
                await Transport.sendMail(mailOptions);
                return NextResponse.json({success: true});
            }catch(error){
                return NextResponse.json({success: false, error});
            }
    }
    else{
        res.status(400).json({error: 'Method Not Working'})
    }
}