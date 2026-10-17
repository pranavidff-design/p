import type { IconType } from "react-icons";
import {
  FaBolt,
  FaBullhorn,
  FaClock,
  FaComments,
  FaFileWord,
  FaPenFancy,
  FaRobot,
  FaUsers,
} from "react-icons/fa";

/* -------------------------------------------------------------------------- */
/*  Profile                                                                   */
/* -------------------------------------------------------------------------- */

export const PROFILE = {
  name: "Pranav Sahu",
  title: "B.Pharm Student",
  college: "RGS College of Pharmacy, Lucknow",
  university: "AKTU",
} as const;

// The About section shows a "Career objective" block only when this is not empty.
export const CAREER_OBJECTIVE =
  "As a Bachelor of Pharmacy (B.Pharm) student, I aspire to build a strong foundation in pharmaceutical sciences while continuously enhancing my knowledge, practical understanding, and professional skills. I aim to explore opportunities for learning, contribute positively to the healthcare sector, and grow into a responsible and competent pharmacy professional.";

export const LANGUAGES: string[] = ["Hindi", "English"];

/* -------------------------------------------------------------------------- */
/*  Skills                                                                    */
/* -------------------------------------------------------------------------- */

export type Skill = {
  name: string;
  icon: IconType;
};

export const SKILLS: Skill[] = [
  { name: "Effective Communication", icon: FaComments },
  { name: "AI Tools & Productivity", icon: FaRobot },
  { name: "Digital Promotion & Awareness", icon: FaBullhorn },
  { name: "Content Creation (Basic)", icon: FaPenFancy },
  { name: "MS Office", icon: FaFileWord },
  { name: "Quick Learner", icon: FaBolt },
  { name: "Time Management", icon: FaClock },
  { name: "Teamwork & Collaboration", icon: FaUsers },
];

/* -------------------------------------------------------------------------- */
/*  Education                                                                 */
/* -------------------------------------------------------------------------- */

export type EducationItem = {
  level: string;
  institution?: string;
  affiliation?: string;
  status: string;
  score?: string;
};

export const EDUCATION: EducationItem[] = [
  {
    level: "B.Pharm",
    institution: "RGS College of Pharmacy, Lucknow",
    affiliation: "Affiliated with AKTU",
    status: "Pursuing",
  },
  {
    level: "Class 12",
    status: "Completed in 2025",
    score: "64%",
  },
  {
    level: "Class 10",
    status: "Completed in 2023",
    score: "78%",
  },
];

/* -------------------------------------------------------------------------- */
/*  Certifications                                                            */
/* -------------------------------------------------------------------------- */

export type Certification = {
  title: string;
  issuer: string;
  // Optional: a public certificate URL shows a "View certificate" link.
  link?: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AI for Beginners",
    issuer: "HP LIFE",
    link: "https://drive.google.com/file/d/16tMA1Ab1JHbkjsXGTIMCWdh_0VTwzfih/view?usp=drivesdk",
  },
  {
    title: "Business Communications",
    issuer: "HP LIFE",
    link: "https://drive.google.com/file/d/1sxpSxB9qB1emijLLGv_mg6jns2aIACee/view?usp=drivesdk",
  },
];

/* -------------------------------------------------------------------------- */
/*  College seminars and awareness activities                                 */
/* -------------------------------------------------------------------------- */

export type Activity = {
  title: string;
  description?: string;
  date?: string;
};

// The Activities section (and its menu link) appears only when this list is not empty.
export const ACTIVITIES: Activity[] = [
  {
    title: "College Seminars",
    description:
      "Participating in academic seminars to broaden subject knowledge and gain new perspectives.",
  },
  {
    title: "Awareness Programs",
    description:
      "Taking part in awareness activities that encourage learning, communication, and community engagement.",
  },
  {
    title: "Collaborative Learning",
    description:
      "Valuing teamwork, knowledge sharing, and active participation in academic activities.",
  },
  {
    title: "Personal Development",
    description:
      "Exploring psychology, human behaviour, and AI tools to expand knowledge and develop new skills.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Interests and strengths                                                   */
/* -------------------------------------------------------------------------- */

export const INTERESTS: string[] = [
  "Reading",
  "Digital Promotion",
  "Exploring AI Tools",
  "Fitness",
  "Psychology",
  "Travel",
  "Podcasts",
  "Chess",
];

export const STRENGTHS: string[] = [
  "Analytical Thinking",
  "Attention to Detail",
  "Adaptability",
  "Positive Attitude",
];

/* -------------------------------------------------------------------------- */
/*  Navigation and social links                                               */
/* -------------------------------------------------------------------------- */

export type NavLink = {
  title: string;
  link: string;
};

export const NAV_LINKS: NavLink[] = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Education", link: "#education" },
  { title: "Certifications", link: "#certifications" },
  ...(ACTIVITIES.length > 0
    ? [{ title: "Activities", link: "#activities" }]
    : []),
  { title: "Interests", link: "#interests" },
];

export type SocialLink = {
  name: string;
  icon: IconType;
  link: string;
};

// Add only the professional profiles you want to show, with the real URL. Example:
//   import { RxLinkedinLogo } from "react-icons/rx";
//   { name: "LinkedIn", icon: RxLinkedinLogo, link: "https://www.linkedin.com/in/your-id" }
// The navbar and footer show social icons only when this list is not empty.
export const SOCIALS: SocialLink[] = [];
