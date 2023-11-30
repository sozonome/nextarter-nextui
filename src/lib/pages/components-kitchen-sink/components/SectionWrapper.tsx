import type React from 'react';

type SectionWrapperProps = React.PropsWithChildren<{
  title: string;
}>;

const SectionWrapper = ({ title, children }: SectionWrapperProps) => {
  return (
    <section className="flex flex-col gap-2">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default SectionWrapper;
