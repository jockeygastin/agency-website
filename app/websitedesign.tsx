"use client";
import { div } from "framer-motion/client";
import { motion } from "framer-motion";
import { ThreeDCardDemo } from "@/components/ui/3d-card";
import { ThreeDCardExample } from "./snippets/3d-card-snippet";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { EvervaultCardSnippet } from "./snippets/evervault-card-snippet";

const Websitedesign = () => {
  return (
    <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32">
      <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-900 to bg-neutral-900 bg-opacity-50">
        Graphic Design <br />
      </div>
      <p className="mt-4 text-lg font-normal text-neutral-900 max-w-lg text-center mx-auto">
        create your business website with us. We are a team of creatives who are
        excited to help you grow your business.
      </p>

      <div className="items-center md:flex justify-center md:mx-auto md:space-x-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="p-4"
        >
          <ThreeDCardExample/>
        </motion.div>

         <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="p-4"
        >
          <EvervaultCardSnippet />
        </motion.div>
      </div>
    </div>

    
  );
};

export default Websitedesign;
