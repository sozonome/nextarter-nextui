import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  return (
    <div className="max-w-[650px] mx-auto px-8 py-6">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
