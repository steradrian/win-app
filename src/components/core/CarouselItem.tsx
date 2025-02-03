import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import YellowCurrency from "../../assets/ftw-currency-yellow.png";
import BlueCurrency from "../../assets/ftw-currency.png";

export type CurrencyType = "yellow" | "blue";

export interface CarouselItemInterface {
  id: string;
  thumbnail: StaticImageData;
  title: string;
  avatars: StaticImageData[];
  playerCount: number;
  reward: number;
  currencyType: CurrencyType;
  entryFee: number;
}

const CarouselItem = ({ item }: { item: CarouselItemInterface }) => {
  const currencyIcon =
    item.currencyType === "blue" ? BlueCurrency : YellowCurrency;
  return (
    <Link
      className="flex flex-col flex-shrink-0 gap-[0.75rem] md:w-[21.875rem] h-[13.5rem] rounded-[1rem] overflow-hidden relative group"
      href="/"
    >
      <Image
        src={item.thumbnail}
        alt={item.title}
        objectFit="cover"
        layout="fill"
        className="transition-all  duration-300  ease-in-out group-hover:opacity-80"
      />

      {/* Assets from Figma already have the elements in the image. Can't get the plain background image from Figma */}

      <div className="absolute top-4 left-4 right-4 flex justify-between">
        <span className="font-fontDefault text-[1rem] leading-[1.5rem]">
          {item.title}
        </span>
        <div className="flex items-center p-[0.375rem] rounded-full gap-[0.25rem] bg-lighter ">
          <div className="flex items-center  leading-[1rem]">
            {item.avatars.map((avatar, index) => (
              <div
                key={`${item.title}-${index}`}
                className={`w-[1rem] h-[1rem] rounded-full overflow-hidden ${
                  index > 0 ? "ml-[-0.25rem]" : ""
                }`}
              >
                <Image src={avatar} alt={`${item.title}-${index}`} />
              </div>
            ))}
          </div>
          <span className="text-[0.75rem] leading-[0.75rem]">{`+${item.playerCount}`}</span>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex justify-between">
        <div className="flex items-center gap-1">
          <span className="text-[1.125rem] font-semibold leading-6">
            {`$${item.reward}`}
          </span>
          <Image src={currencyIcon} alt="Currency" className="w-4 h-4" />
          <span className="text-[0.875rem] font-medium leading-4">Reward</span>
        </div>
        <div className="flex items-center gap-1 p-[0.375rem] rounded-full bg-lighter ">
          <span className="text-[0.75rem] leading-3 font-semibold">
            {item.entryFee}
          </span>
          <Image src={currencyIcon} alt="Currency" className="w-4 h-4" />
          <span className="text-[0.75rem] leading-3 text-textSubdued">
            Entry
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CarouselItem;
