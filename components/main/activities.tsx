import { SectionHeading } from "@/components/sub/section-heading";

import { ACTIVITIES } from "@/constants";

export const Activities = () => {
  if (ACTIVITIES.length === 0) return null;

  return (
    <section
      id="activities"
      className="flex flex-col items-center gap-10 px-6 py-20 sm:px-10"
    >
      <SectionHeading title="Activities and participation" />

      <ul className="grid w-full max-w-[1000px] grid-cols-1 gap-4 sm:grid-cols-2">
        {ACTIVITIES.map((activity) => (
          <li
            key={activity.title}
            className="glass-card rounded-xl p-5"
          >
            <h3 className="text-lg font-medium text-white">{activity.title}</h3>
            {activity.date && (
              <p className="mt-1 text-sm text-gray-400">{activity.date}</p>
            )}
            {activity.description && (
              <p className="mt-2 text-gray-300">{activity.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
