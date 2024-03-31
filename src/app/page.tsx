import Image from "next/image";
import Navbar from '@/app/components/Nabvar'
import MainSection from "@/app/components/MainSection"
import Footer from  "@/app/components/Footer"
import Testimonial from '@/app/components/Testimonial'
import Feature from '@/app/components/Feature'
import Price from '@/app/components/Price';

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <MainSection></MainSection>
      <Feature></Feature>
      <Testimonial></Testimonial>
      <Price></Price>
   
      <Footer></Footer>
    </div>
  );
}
