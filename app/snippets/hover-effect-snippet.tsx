import { HoverEffect } from "@/components/ui/card-hover-effect";
import { div } from "framer-motion/client";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon : <div className="bg-blue-100 p-2 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
    title: "Website Design",
    description:
      "We build fully responsive websites that look great on all devices. Our websites are designed to convert visitors into customers.",
  },


  {   
    icon : <div className="bg-blue-100 p-2 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
    title: "SEO Optimization",
    description:
      "We optimize your website for search engines to improve its visibility and rank higher in search results.",
  },

{
    icon : <div className="bg-blue-100 p-2 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
    title: "Authentication",
    description:
      "Secure authentication solutions for your website or app. We use the latest technology to keep your data safe.",
  },

{    
    icon : <div className="bg-blue-100 p-2 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
    title: "App Development",
    description:
      "We build custom mobile apps for iOS and Android. Our developers have a proven track record of creating successful apps for top companies.",
  },

  {
     icon : <div className="bg-blue-100 p-2 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
     title: "Customer Support",
     description:
      "We offer a wide range of support services to help you with any issues you may have with your website.",
  },

  {
    icon : <div className="bg-blue-100 p-2 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
    title: "Scalable Systems",
    description:
      "We design and develop scalable systems that can handle large volumes of traffic and data.",
  },
 
];
