import HeroSection from "@/components/HeroSection";
import SampleSection from "@/components/SampleSection";

const MainWindow = ({ papers }: any) => {
  return (
    <>
      <main className="w-full flex-auto">
        <HeroSection />
        <SampleSection papers={papers} />
      </main>
    </>
  );
};

export default MainWindow;
