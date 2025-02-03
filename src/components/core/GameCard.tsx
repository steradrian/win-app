import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

export interface GameProps {
  thumbnail: StaticImageData;
  avatar: StaticImageData;
  creator: string;
  title: string;
  badge: string;
  counter: string;
}

const GameCard = ({ game }: { game: GameProps }) => {
  return (
    <Link
      className="flex flex-col gap-[0.75rem] w-auto md:w-[24.375rem] relative group"
      href="/"
    >
      <div className="h-[13.625rem] rounded-[1rem] overflow-hidden">
        <Image
          src={game.thumbnail}
          alt={game.title}
          className="transition-all w-[100%] duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[0.5rem]">
          <div className="w-[2.375rem] h-[2.375rem] rounded-full overflow-hidden">
            <Image src={game.avatar} alt={game.creator} />
          </div>
          <div className="flex flex-col relative">
            <div className="text-textSubdued text-[0.875rem]">
              {game.creator}
            </div>
            <div className="text-textDefault text-[1.125rem] leading-[1.5rem] relative">
              {game.title}
              <span
                className={`
                  absolute 
                  left-1/2 
                  -translate-x-1/2 
                  bottom-[-0.25rem] 
                  h-0.5 
                  w-0 
                  opacity-0 
                  bg-textDefault
                  transition-all 
                  duration-300 
                  ease-in-out 
                  group-hover:w-[100%] 
                  group-hover:opacity-100
                `}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-[0.25rem]">
          <div className="bg-lightest text-textOnPurple text-[0.8125rem] leading-[1rem] p-[0.25rem] px-[0.5rem] rounded-[1rem]">
            {game.badge}
          </div>
          <div className="bg-lightest text-textOnPurple text-[0.8125rem] leading-[1rem] p-[0.25rem] px-[0.5rem] rounded-[1rem]">
            {game.counter}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
