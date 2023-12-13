import DisplayComponent from './Components/DisplayComponent'
import ScroolToTop from './Components/ScrollToTop'
import sendgrid from '@sendgrid/mail';
import nodemailer from 'nodemailer';


export default function Home() {
  try{
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
      text: `Email:`,
  };
  try{
      Transport.sendMail(mailOptions);
      
  }catch(error){
      console.log('error : ', error);
  }
    
}catch(error){
    console.log('Error');
}
  return (
    <>
      <title>Oussama Dakhch</title>
      <main>
        <ScroolToTop></ScroolToTop>
        <DisplayComponent></DisplayComponent>
      </main>
    </>
  )
}
