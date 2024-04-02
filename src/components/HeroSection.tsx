"use client";

import { motion } from "framer-motion";
import WaitlistInput from "@/components/WaitlistInput";

const HeroSection = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56">
        <div className="mx-auto max-w-2xl lg:max-w-none space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-center">
              <h1 className="text-5xl sm:text-7xl font-bold text-slate-900">
                Discover the latest in AI research
              </h1>
            </div>
            <div className="flex justify-center">
              <h2 className="text-2xl mt-2 text-slate-600">
                Join 15k+ researchers from around the world
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <div className="flex justify-center">
                <WaitlistInput />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
