import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';

import SectionWrapper from '@/lib/pages/components-kitchen-sink/components/SectionWrapper';

const BreadcrumbsSection = () => {
  const variants = ['solid', 'bordered', 'light'] as const;

  return (
    <SectionWrapper title="Breadcrumbs">
      <div className="flex flex-col flex-wrap gap-4">
        {variants.map((variant) => (
          <Breadcrumbs key={variant} variant={variant}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Music</BreadcrumbItem>
            <BreadcrumbItem>Artist</BreadcrumbItem>
            <BreadcrumbItem>Album</BreadcrumbItem>
            <BreadcrumbItem>Song</BreadcrumbItem>
          </Breadcrumbs>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default BreadcrumbsSection;
