import Image from "next/image";
import Navbar from '@/app/components/Nabvar'
import MainSection from "@/app/components/MainSection"
import Footer from  "@/app/components/Footer"
import Testimonial from '@/app/components/Testimonial'


export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <MainSection></MainSection>
      <Testimonial></Testimonial>
   
      <Footer></Footer>
    </div>
  );
}
