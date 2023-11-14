import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { LuArrowLeft } from 'react-icons/lu';

const HeadSection = () => {
  return (
    <section className="md:flex gap-4 prose-headings:mt-2 md:prose-headings:m-0">
      <Button
        as={Link}
        href="/"
        startContent={<LuArrowLeft />}
        className="no-underline"
      >
        Home
      </Button>
      <h1>Components</h1>
    </section>
  );
};

export default HeadSection;
