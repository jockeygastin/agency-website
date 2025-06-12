import { div } from "framer-motion/client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



const Faq = () => {
    return (  

        <div className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl pl-2">

            <div className="p-10 md:p-4 md:px-20 ">
                <div className="text-3xl md:text-7xl font-bold text-black text-center">
                   Have a question?
                </div>
                <p className="mt-4 text-lg font-normal text-neutral-800 max-w-lg text-center mx-auto">
                    We create stunning Shopify stores that are designed to convert.
                </p>
            </div>
            <div className="font-semibold text-3xl md:text-6xl bg-gradient-to-b from-emerald-600 to-blue-300 bg-clip-text text-transparent">
                Get Answer. </div>
                  <Accordion type="single" collapsible>
                 <AccordionItem value="item-1">
                <AccordionTrigger>How to Start?</AccordionTrigger>
                <AccordionContent>
                    Digital agecny is accessible for all users, regardless of their ability to use a computer.
               </AccordionContent>
              </AccordionItem>
             </Accordion>

               <Accordion type="single" collapsible>
                 <AccordionItem value="item-2">
                <AccordionTrigger>Pricing?</AccordionTrigger>
                <AccordionContent>
                    Digital agecny is accessible for all users, regardless of their ability to use a computer.
               </AccordionContent>
              </AccordionItem>
             </Accordion>
               <Accordion type="single" collapsible>
                 <AccordionItem value="item-3">
                <AccordionTrigger>Customer Support?</AccordionTrigger>
                <AccordionContent>
                    Digital agecny is accessible for all users, regardless of their ability to use a computer.
               </AccordionContent>
              </AccordionItem>
             </Accordion>

        </div>
        
    );
}
 
export default Faq;