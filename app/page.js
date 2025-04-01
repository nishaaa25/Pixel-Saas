import HeroComponent from "@/components/HeroComponent";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen max-w-screen relative">
      <Navbar/>
      <div>
        <HeroComponent/>
      </div>
    </main>
  );
}
