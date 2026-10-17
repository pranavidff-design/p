import { About } from "@/components/main/about";
import { Activities } from "@/components/main/activities";
import { Certifications } from "@/components/main/certifications";
import { Education } from "@/components/main/education";
import { Hero } from "@/components/main/hero";
import { InterestsStrengths } from "@/components/main/interests-strengths";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Activities />
        <InterestsStrengths />
      </div>
    </main>
  );
}
