import { galleryText } from "@componentes/utils/text";
import React from "react";
import GameCard from "./core/GameCard";
import { galleryData } from "@componentes/utils/constants";

const Gallery = () => {
  return (
    <section className="mb-[2rem]">
      <h2 className="text-textDefault text-[1.25rem] md:text-[1.5rem] leading-[1.75rem] md:leading-[2rem]">
        {galleryText.title}
      </h2>
      <p className="mb-[1.5rem] text-textSubdued text-[0.875rem] leading-[1rem]">
        {galleryText.description}
      </p>
      <div className="flex flex-col md:flex-row flex-wrap gap-[1.5rem] md:gap-[1rem]">
        {galleryData.map((game) => (
          <GameCard game={game} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
