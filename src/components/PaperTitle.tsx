interface IPaperTitle {
  title: string;
}

const PaperTitle = ({ title }: IPaperTitle) => {
  return (
    <div className="flex justify-center">
      <h1 className="text-3xl sm:text-5xl font-bold text-slate-900">{title}</h1>
    </div>
  );
};

export default PaperTitle;
