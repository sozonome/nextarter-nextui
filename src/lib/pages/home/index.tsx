import CTASection from '@/lib/components/samples/CTASection';
import SomeText from '@/lib/components/samples/SomeText';

const Home = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-[70vh]">
      <SomeText />
      <CTASection />
    </div>
  );
};

export default Home;
