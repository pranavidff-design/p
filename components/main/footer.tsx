import Link from "next/link";

import { PROFILE, SOCIALS } from "@/constants";

export const Footer = () => {
  return (
    <footer className="mt-10 w-full bg-transparent p-[15px] text-gray-200 shadow-lg">
      <div className="m-auto flex w-full flex-col items-center justify-center gap-5">
        {SOCIALS.length > 0 && (
          <div className="flex flex-row items-center gap-6">
            {SOCIALS.map(({ icon: Icon, name, link }) => (
              <Link
                key={name}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={name}
              >
                <Icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        )}

        <p className="mb-[20px] text-center text-[15px]">
          &copy; {new Date().getFullYear()} {PROFILE.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
