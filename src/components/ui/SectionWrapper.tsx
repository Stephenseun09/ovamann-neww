const SectionWrapper = ({
  children,
  className,
  style,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={`${className} mx-auto max-w-[89rem] px-4 py-10 sm:px-5 md:px-7 md:py-12 `}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
