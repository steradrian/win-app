import { heroText } from "@componentes/utils/text";
import React from "react";
import ButtonLink from "./core/ButtonLink";

const Hero = () => {
  return (
    <section className="py-[3.875rem] md:py-[5.5rem]">
      <h1 className="text-[2.25rem] md:text-[3rem] font-extrabold text-textDefault leading-[2.5rem] md:leading-[3rem] mb-[0.75rem]">
        {heroText.title.line1}
        <br />
        {heroText.title.line2}
      </h1>
      <p className="mb-[2rem] text-[1.125rem] leading-5 md:leading-[1.125rem] text-textDefault">
        {heroText.subtitle}
      </p>
      <ButtonLink href="/register" text={heroText.register} />
    </section>
  );
};

export default Hero;
