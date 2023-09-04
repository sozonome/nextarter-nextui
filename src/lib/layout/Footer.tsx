import { Link } from '@nextui-org/link';

const Footer = () => {
  return (
    <footer className="max-w-[650px] mx-auto px-8 py-6 text-xs flex justify-center items-center">
      {new Date().getFullYear()} {' - '}
      <Link
        size="sm"
        href="https://sznm.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        sznm.dev
      </Link>
    </footer>
  );
};

export default Footer;
