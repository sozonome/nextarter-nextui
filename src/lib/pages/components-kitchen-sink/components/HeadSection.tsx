import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { LuArrowLeft } from 'react-icons/lu';

const HeadSection = () => {
  return (
    <section>
      <Button as={Link} href="/" startContent={<LuArrowLeft />} className="no-underline">
        Home
      </Button>
      <h2 className="mt-2">Components</h2>
    </section>
  );
};

export default HeadSection;
