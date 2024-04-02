import HeroSection from "@/components/HeroSection";
import SampleSection from "@/components/SampleSection";

const MainWindow = ({ blogs }: any) => {
  return (
    <>
      <main className="w-full flex-auto">
        <HeroSection />
        <SampleSection blogs={blogs} />
      </main>
    </>
  );
};

export default MainWindow;
