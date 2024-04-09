import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Footer from "@/components/layout/Footer";
import MainWindow from "@/components/Main";

export default function Home() {
  // 1) Set blogs directory
  const paperDir = "papers";

  // 2) Find all files in the blog directory
  const files = fs.readdirSync(path.join(paperDir));

  // 3) For each blog found
  const papers = files.map((filename) => {
    // 4) Read the content of that blog
    const fileContent = fs.readFileSync(path.join(paperDir, filename), "utf-8");

    // 5) Extract the metadata from the blog's content
    const { data: frontMatter } = matter(fileContent);

    // 6) Return the metadata and page slug
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <>
      <MainWindow papers={papers} />
      <Footer />
    </>
  );
}
