import { SectionHeading } from "@/components/sub/section-heading";

import { EDUCATION } from "@/constants";

export const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center gap-10 px-6 py-20 sm:px-10"
    >
      <SectionHeading title="Education" />

      <ol className="relative ml-3 flex w-full max-w-[800px] flex-col gap-8 border-l border-[#7042f88b]">
        {EDUCATION.map((item) => (
          <li key={item.level} className="relative pl-8">
            <span
              aria-hidden="true"
              className="absolute -left-[7px] top-6 h-3 w-3 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500"
            />

            <div className="glass-card rounded-xl p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-medium text-white">{item.level}</h3>
                {item.score && (
                  <span className="font-medium text-[#b49bff]">
                    {item.score}
                  </span>
                )}
              </div>

              {item.institution && (
                <p className="mt-1 text-gray-300">{item.institution}</p>
              )}
              {item.affiliation && (
                <p className="text-sm text-gray-400">{item.affiliation}</p>
              )}
              <p className="mt-2 text-sm text-gray-400">{item.status}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
