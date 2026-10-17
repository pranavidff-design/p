type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-medium text-white sm:text-4xl">{title}</h2>

      {subtitle && (
        <p className="cursive mt-[10px] text-[20px] text-gray-200">
          {subtitle}
        </p>
      )}

      <div
        aria-hidden="true"
        className="mt-4 h-[3px] w-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
      />
    </div>
  );
};
