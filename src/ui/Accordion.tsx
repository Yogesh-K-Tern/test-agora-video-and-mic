import React, { useState } from "react";
import { ChevronRight } from "react-feather";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-start pt-5 pb-2 focus:outline-none"
      >
        <ChevronRight
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
          size={16}
        />
        <span className="ml-2 text-[15px] font-medium">{title}</span>
      </button>
      <div
        className={`px-7 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="text-[15px] font-normal text-[#555F6D]">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
