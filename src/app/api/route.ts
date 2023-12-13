import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import {NextResponse} from "next/server";
export const dynamic = 'force-static';

dotenv.config();

interface dataDto {
  "email": string,
  "mobile": string,
  "message": string
}

export async function POST(request: Request){
        if (request.method === 'POST')
        {
            try
            {
                const rawData: any = await request.json();
                if (rawData)
                {
                    const data: dataDto = {
                        email: rawData.email,
                        mobile: rawData.mobile,
                        message: rawData.message,
                    };
                    const {email, mobile, message} = data;

                    if (typeof window === "undefined")
                    {
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
                            subject: 'Portfolio Message',
                            text: `Email: ${email}\n Mobile: ${mobile} Message: ${message}`,
                        };
                        try{
                            await Transport.sendMail(mailOptions);
                            return NextResponse.json({success: true});
                        }catch(error){
                            return NextResponse.json({success: false, error});
                        }
                    }
                    else {
                        return NextResponse.json({ success: false, error: 'Client-side logic' });
                      }
                }
                else
                {
                    return NextResponse.json({success: false});
                }
        }
        catch(error)
        {
            return NextResponse.json({ success: false, error: 'Error parsing JSON from request.' });
        }
            
    }
    else{
        return NextResponse.json({success: false});
    }
}