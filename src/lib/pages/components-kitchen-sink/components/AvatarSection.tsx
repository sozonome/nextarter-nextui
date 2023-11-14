import { Avatar } from '@nextui-org/react';
import React from 'react';

const AvatarSection = () => {
  return (
    <section>
      <h3>Avatar</h3>
      <div className="flex gap-3 items-center">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar name="Junior" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar name="Jane" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        <Avatar name="Joe" />
      </div>
    </section>
  );
};

export default AvatarSection;
