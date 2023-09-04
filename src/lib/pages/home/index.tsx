import CTASection from '@/lib/components/samples/CTASection';
import SomeText from '@/lib/components/samples/SomeText';

const Home = () => {
  return (
    <div className="grid gap-8 items-center justify-center min-h-[70vh] flex-col">
      <SomeText />
      <CTASection />
    </div>
  );
};

export default Home;
