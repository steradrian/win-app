"use client";

import { stepIndicatorText } from "@componentes/utils/text";
import { useEffect, useState } from "react";

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const steps = Object.entries(stepIndicatorText);

  return (
    <div className="flex items-center w-full justify-between mb-[4.5rem]">
      {steps.map(([key, text]) => (
        <div
          key={Number(key)}
          className={`relative flex items-center w-[4.25rrem] ${
            Number(key) < steps.length
              ? `after:content-[''] after:w-[70%] after:h-0.5 ${
                  Number(key) < currentStep
                    ? "after:bg-basePrimary"
                    : "after:bg-gray"
                } after:absolute after:left-[5rem] after:top-[1.25rem] after:transform after:-translate-y-1/2 after:mx-[1rem]  md:after:mx-4`
              : ""
          }`}
        >
          <div className="flex flex-col items-center">
            <div
              className={`bg-lightGray w-10 h-10 mb-2 flex items-center justify-center text-textDark rounded-[4px] border-2 text-center text-[0.875rem] leading-5 font-semibold ${
                Number(key) <= currentStep
                  ? "border-basePrimary"
                  : "border-gray"
              }`}
            >
              {Number(key)}
            </div>
            <span className="text-textDark text-center text-[0.875rem] leading-5 font-semibold">
              {text}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
