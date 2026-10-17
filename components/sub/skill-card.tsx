"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { useInView } from "react-intersection-observer";

type SkillCardProps = {
  name: string;
  icon: IconType;
  index: number;
};

export const SkillCard = ({ name, icon: Icon, index }: SkillCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass-card flex items-center gap-4 rounded-xl px-5 py-4"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 text-[#b49bff]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>

      <span className="font-medium text-white">{name}</span>
    </motion.li>
  );
};
