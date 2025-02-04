import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../assets/logo-dark.png";
import WhiteLayoutPNG from "../../assets/white-layout.png";

const WhiteLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-light min-h-screen relative">
      <div className="relative md:max-w-[90rem] md:mx-auto z-0">
        <Image
          src={WhiteLayoutPNG}
          alt="Stars"
          className="absolute left-0 top-0 h-[29.375rem] w-full object-cover md:h-auto "
        />
      </div>
      <main className="relative z-10 max-w-[30rem] mx-auto pt-[4.5rem] flex flex-col items-center justify-center">
        <Link href="/" className="mb-[4.5rem]">
          <Image
            src={Logo}
            alt="Win logo"
            height={32}
            className="object-contain"
          />
        </Link>
        {children}
      </main>
    </div>
  );
};

export default WhiteLayout;
