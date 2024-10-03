import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Will you film my videos?",
    answer: "Yes, we can",
  },
  {
    question: "How long does a video take?",
    answer: "It depends on the type of video...",
  },
  {
    question: "Can I do consulting calls with Ali Abdaal?",
    answer: "Ali Abdaal is not available for consulting calls at the moment...",
  },
  {
    question: "Do you only make YouTube videos?",
    answer: "We can make videos for any platform...",
  },
  {
    question: "Why wouldn't I just hire my own team?",
    answer:
      "Hiring your own team can be expensive and time-consuming. We offer a more cost-effective solution...",
  },
];

const FAQSection = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-6xl font-bold mb-6">
              Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Burning
                <br />
                Questions.
              </span>
            </h2>
            <p className="text-white mb-8 text-md">
              "A content subscription that meets all my copy needs?" We're no
              mind-readers, but we figured you'd have a few questions. Do your
              proper vetting with a scroll through our FAQ.
            </p>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold py-4 border-b border-gray-700">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="py-4 text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
