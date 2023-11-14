import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { LuArrowLeft } from 'react-icons/lu';

const HeadSection = () => {
  return (
    <section>
      <Button
        as={Link}
        href="/"
        startContent={<LuArrowLeft />}
        className="no-underline"
      >
        Home
      </Button>
      <h1 className="mt-2">Components</h1>
    </section>
  );
};

export default HeadSection;
