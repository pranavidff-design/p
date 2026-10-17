import { SkillCard } from "@/components/sub/skill-card";
import { SkillText } from "@/components/sub/skill-text";

import { SKILLS } from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative isolate flex h-full flex-col items-center justify-center gap-10 overflow-hidden px-6 py-20 sm:px-10"
    >
      <SkillText />

      <ul className="grid w-full max-w-[1100px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((skill, i) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            index={i}
          />
        ))}
      </ul>

      <div className="absolute h-full w-full">
        <div className="absolute z-[-10] flex h-full w-full items-center justify-center bg-cover opacity-30">
          <video className="h-auto w-full" playsInline loop muted autoPlay>
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
