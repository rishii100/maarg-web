import Image from "next/image";
import LandingPage from "./Landingpage/LandingPage";

export default function Home() {
  return (
    <main className="h-screen w-screen flex min-h-screen flex-col items-center justify-between p-24 bg-[#F2F3F5]">
      <LandingPage />
    </main>
  );
}
