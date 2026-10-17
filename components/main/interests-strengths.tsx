import { SectionHeading } from "@/components/sub/section-heading";

import { INTERESTS, STRENGTHS } from "@/constants";

const groups = [
  { title: "Interests", items: INTERESTS },
  { title: "Strengths", items: STRENGTHS },
];

export const InterestsStrengths = () => {
  return (
    <section
      id="interests"
      className="flex flex-col items-center gap-10 px-6 py-20 sm:px-10"
    >
      <SectionHeading title="Interests and strengths" />

      <div className="grid w-full max-w-[1000px] grid-cols-1 gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <div key={group.title} className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-medium text-white">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
