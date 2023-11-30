import BreadcrumbsSection from '@/lib/pages/components-kitchen-sink/components/BreadcrumbsSection';

import AccordionSection from './components/AccordionSection';
import AutoComplete from './components/AutoComplete';
import AvatarSection from './components/AvatarSection';
import BadgeSection from './components/BadgeSection';
import ButtonSection from './components/ButtonSection';
import HeadSection from './components/HeadSection';

const ComponentsKitchenSink = () => {
  return (
    <div className="grid gap-8 items-center prose prose-headings:m-0 prose-hr:m-0 dark:prose-invert">
      <HeadSection />
      <AvatarSection />
      <AccordionSection />
      <AutoComplete />
      <BadgeSection />
      <ButtonSection />
      <BreadcrumbsSection />
    </div>
  );
};

export default ComponentsKitchenSink;
