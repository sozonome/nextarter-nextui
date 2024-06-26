import { Button, Image, Link } from '@nextui-org/react';

const repoName = 'nextarter-nextui';
const repoLink = `https://github.com/sozonome/${repoName}`;

const CTASection = () => {
  return (
    <div className="grid gap-4 items-center justify-center flex-col">
      <div className="flex gap-2 mb-4 justify-center">
        <Link
          aria-label="Deploy to Vercel"
          target="_blank"
          rel="noreferrer noopener"
          href={`https://vercel.com/import/git?s=${repoLink}`}
        >
          <Image src="https://vercel.com/button" alt="Vercel deploy button" />
        </Link>
        <Link
          aria-label="Deploy to Netlify"
          target="_blank"
          rel="noreferrer noopener"
          href={`https://app.netlify.com/start/deploy?repository=${repoLink}`}
        >
          <Image
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </Link>
      </div>

      <div className="flex gap-2 justify-center">
        <Button
          as="a"
          href={`${repoLink}/generate`}
          target="_blank"
          rel="noreferrer noopener"
          color="primary"
          variant="shadow"
        >
          Use this Template
        </Button>

        <Button
          as={Link}
          href="/components-kitchen-sink"
          rel="noreferrer noopener"
          color="secondary"
          variant="shadow"
        >
          See Components
        </Button>
      </div>

      <div className="flex justify-center items-center gap-2">
        <Button
          as="a"
          href={repoLink}
          target="_blank"
          rel="noreferrer noopener"
          size="sm"
          variant="bordered"
        >
          Open in Github
        </Button>
        <Link href={repoLink} target="_blank" rel="noreferrer noopener">
          <Image
            src={`https://img.shields.io/github/stars/sozonome/${repoName}?style=social`}
            alt="github stars"
          />
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
