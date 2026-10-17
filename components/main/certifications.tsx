import { FaCertificate } from "react-icons/fa";

import { SectionHeading } from "@/components/sub/section-heading";

import { CERTIFICATIONS } from "@/constants";

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="flex flex-col items-center gap-10 px-6 py-20 sm:px-10"
    >
      <SectionHeading title="Certifications" />

      <ul className="grid w-full max-w-[900px] grid-cols-1 gap-4 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert) => (
          <li
            key={cert.title}
            className="glass-card flex items-start gap-4 rounded-xl p-5"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 text-[#b49bff]">
              <FaCertificate className="h-6 w-6" aria-hidden="true" />
            </span>

            <div>
              <h3 className="text-lg font-medium text-white">{cert.title}</h3>
              <p className="text-gray-400">{cert.issuer}</p>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-2 inline-block text-[#b49bff] underline underline-offset-4"
                >
                  View certificate
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
