"use client";

import Link from "next/link";

import { motion } from "framer-motion";

const SampleSection = ({ blogs }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <section className="mt-24 py-20 sm:mt-32 sm:py-32 lg:mt-56">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl block font-display tracking-tight font-semibold sm:text-4xl text-slate-700">
              Sample Papers
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <div className="mx-auto max-w-7xl mt-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {blogs.map((blog: any) => (
                    <Link
                      href={"/papers/" + blog.slug}
                      passHref
                      key={blog.slug}
                      className="bg-slate-50 rounded-3xl hover:bg-slate-100"
                    >
                      <div className="flex">
                        <article className="flex flex-col p-6 text-slate-900 relative w-full transition  sm:p-8">
                          <h3 className="text-2xl font-semibold">
                            {blog.meta.title}
                          </h3>
                          <p className="mt-2">{blog.meta.date}</p>
                          <p className="mt-4">{blog.meta.description}</p>
                        </article>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default SampleSection;
