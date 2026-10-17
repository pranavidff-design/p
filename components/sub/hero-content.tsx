"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

import { PROFILE } from "@/constants";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="z-[20] mt-28 flex w-full flex-col items-center justify-center gap-10 px-6 sm:px-10 md:mt-40 md:flex-row lg:px-20"
    >
      <div className="m-auto flex h-full w-full flex-col justify-center gap-5 text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box border border-[#7042f88b] px-[7px] py-[8px] opacity-[0.9]"
        >
          <SparklesIcon className="mr-[10px] h-5 w-5 text-[#b49bff]" />
          <span className="Welcome-text text-[13px]">{PROFILE.title}</span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-6 h-auto w-auto max-w-[600px]"
        >
          <h1 className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl">
            {PROFILE.name}
          </h1>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="my-5 max-w-[600px] text-lg text-gray-400"
        >
          {PROFILE.title} at {PROFILE.college}, affiliated with{" "}
          {PROFILE.university}. Explore my skills, education and
          certifications below.
        </motion.p>

        <motion.a
          href="#about-me"
          variants={slideInFromLeft(1)}
          className="button-primary max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white"
        >
          Learn more
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex h-full w-full items-center justify-center"
      >
        <Image
          src="/logo.png"
          alt=""
          aria-hidden="true"
          height={420}
          width={420}
          draggable={false}
          className="h-auto w-full max-w-[260px] select-none md:max-w-[420px]"
        />
      </motion.div>
    </motion.div>
  );
};
