import { SectionHeading } from "@/components/sub/section-heading";

import { CAREER_OBJECTIVE, LANGUAGES, PROFILE } from "@/constants";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center gap-10 px-6 py-20 sm:px-10"
    >
      <SectionHeading title="About me" />

      <div className="glass-card flex w-full max-w-[900px] flex-col gap-8 rounded-2xl p-6 sm:p-10">
        <div>
          <h3 className="text-2xl font-medium text-white">{PROFILE.name}</h3>
          <p className="mt-1 text-gray-300">{PROFILE.title}</p>
          <p className="mt-1 text-gray-400">
            {PROFILE.college}, affiliated with {PROFILE.university}
          </p>
        </div>

        {CAREER_OBJECTIVE && (
          <div>
            <h3 className="text-lg font-medium text-white">Career objective</h3>
            <p className="mt-2 max-w-[70ch] leading-relaxed text-gray-300">
              {CAREER_OBJECTIVE}
            </p>
          </div>
        )}

        {LANGUAGES.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-white">Languages</h3>
            <ul className="mt-3 flex flex-wrap gap-3">
              {LANGUAGES.map((language) => (
                <li key={language} className="chip">
                  {language}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};
