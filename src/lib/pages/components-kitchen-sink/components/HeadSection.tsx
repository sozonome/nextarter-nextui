import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

const HeadSection = () => {
  return (
    <section>
      <Button as={Link} href="/">
        Home
      </Button>
      <h2 className="mt-2">Components</h2>
    </section>
  );
};

export default HeadSection;
