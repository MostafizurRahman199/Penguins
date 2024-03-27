import Image from "next/image";
import Navbar from '@/app/components/Nabvar'
import MainSection from "@/app/components/MainSection"
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <MainSection></MainSection>
    </div>
  );
}
