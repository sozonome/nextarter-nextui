import React from 'react';

import AvatarSection from './components/AvatarSection';
import HeadSection from './components/HeadSection';

const ComponentsKitchenSink = () => {
  return (
    <div className="grid gap-2 items-center prose dark:prose-invert">
      <HeadSection />
      <AvatarSection />
    </div>
  );
};

export default ComponentsKitchenSink;
