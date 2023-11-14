import AutoComplete from '@/lib/pages/components-kitchen-sink/components/AutoComplete';
import BadgeSection from '@/lib/pages/components-kitchen-sink/components/BadgeSection';

import AccordionSection from './components/AccordionSection';
import AvatarSection from './components/AvatarSection';
import HeadSection from './components/HeadSection';

const ComponentsKitchenSink = () => {
  return (
    <div className="grid gap-8 items-center prose prose-headings:m-0 prose-hr:m-0 dark:prose-invert">
      <HeadSection />
      <AvatarSection />
      <AccordionSection />
      <AutoComplete />
      <BadgeSection />
    </div>
  );
};

export default ComponentsKitchenSink;
