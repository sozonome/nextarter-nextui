import { Avatar, Badge } from '@nextui-org/react';
import { LuBell, LuCheck } from 'react-icons/lu';

import SectionWrapper from '@/lib/pages/components-kitchen-sink/components/SectionWrapper';

const BadgeSection = () => {
  return (
    <SectionWrapper title="Badge">
      <div className="flex gap-5 items-center">
        <Badge content="5" color="danger">
          <Avatar
            radius="md"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </Badge>
        <Badge
          content=""
          color="success"
          shape="circle"
          placement="bottom-right"
        >
          <Avatar
            radius="full"
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          />
        </Badge>
        <Badge content="new" color="danger" size="sm">
          <Avatar
            isBordered
            radius="md"
            color="danger"
            src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
          />
        </Badge>
        <Badge
          isOneChar
          content={<LuCheck />}
          color="success"
          placement="bottom-right"
        >
          <Avatar
            isBordered
            color="success"
            radius="md"
            src="https://i.pravatar.cc/300?u=a042581f4e290267072"
          />
        </Badge>
        <Badge
          isOneChar
          content={<LuBell />}
          color="danger"
          shape="circle"
          placement="top-right"
        >
          <Avatar
            radius="full"
            size="lg"
            src="https://i.pravatar.cc/300?u=a042581f4e29026704f"
          />
        </Badge>
      </div>
    </SectionWrapper>
  );
};

export default BadgeSection;
