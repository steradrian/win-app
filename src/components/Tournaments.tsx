import { tournamentsText } from "@componentes/utils/text";
import React from "react";
import Carousel from "./core/Carousel";
import { tournamentsList } from "@componentes/utils/constants";

const Tournaments = () => {
  return (
    <section className="mb-[2rem]">
      <h2 className="text-textDefault text-[1.25rem] md:text-[1.5rem] leading-[1.75rem] md:leading-[2rem]">
        {tournamentsText.title}
      </h2>
      <p className="mb-[1.5rem] text-textSubdued text-[0.875rem] leading-[1rem]">
        {tournamentsText.description}
      </p>

      <Carousel list={tournamentsList} />
    </section>
  );
};

export default Tournaments;
