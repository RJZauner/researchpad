import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import PaperButtonGroup from "@/components/PaperButtonGroup";

import { Fragment } from "react";

import { MDXRemote } from "next-mdx-remote/rsc";
import Breadcrumb from "@/components/Breadcrumb";
import PaperTitle from "@/components/PaperTitle";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("papers"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("papers", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateMetadata({ params }: any) {
  const blog = getPost(params);

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
    arxivLink: blog.frontMatter.arxivLink,
  };
}

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

export default function Post({ params }: any) {
  const props = getPost(params);

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate mx-auto min-h-screen mb-12">
      <div className="w-full flex-auto">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 sm:mt-16 md:mt-28">
          <div className="mx-auto max-w-2xl lg:max-w-none space-y-5">
            <Breadcrumb arxivLink={props.frontMatter.arxivLink} />
            <PaperTitle title={props.frontMatter.title} />
          </div>
        </div>
      </div>
      <section className="mt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <MDXRemote
            source={props.content}
            components={{ PaperButtonGroup }}
            options={options}
          />
        </div>
      </section>
    </article>
  );
}
