import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 w-full sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="mb-20 mt-24 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-slate-200 pt-4">
          <Logo />
          <p className="text-sm text-neutral-700"> © researchpad inc</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
