import Link from "next/link";

interface IArxivLink {
  arxivLink: string;
}

const Breadcrumb = ({ arxivLink }: IArxivLink) => {
  return (
    <div className="flex gap-2 items-center">
      <Link type="button" href="/" className="no-underline hover:underline">
        Papers
      </Link>
      <p className="flex items-center gap-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span>{arxivLink}</span>
      </p>
    </div>
  );
};

export default Breadcrumb;
