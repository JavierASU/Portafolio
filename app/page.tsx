import Introduction from "@/components/Introduction";
import TransitionPage from "@/components/transition-page";

import { CoverParticles } from "@/cover-particles";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex main-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}
