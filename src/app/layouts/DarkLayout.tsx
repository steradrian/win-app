"use client";

import Footer from "@componentes/components/core/Footer";
import Header from "@componentes/components/core/Header";
import Image from "next/image";
import React from "react";
import HeroImage from "../../assets/hero-background.svg";
import useGetUser from "@componentes/lib/hooks/useGetUser";

// Creating a dark layout to be reused in different pages

const DarkLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    data: userData,
    error: userError,
    isLoading: isLoadingUser,
  } = useGetUser();

  return (
    <div className="bg-dark min-h-screen">
      <div className="relative md:max-w-[90rem] md:mx-auto z-0">
        <Image
          src={HeroImage}
          alt="Background Image"
          className="absolute left-0 top-0 h-[29.375rem] w-full object-cover md:h-auto"
        />
      </div>
      <div className="md:hidden absolute inset-0 bg-black opacity-40" />
      <Header />
      <main className="relative z-10 max-w-[90rem] mx-auto px-[0.875rem] md:px-[7rem] py-0 md:py-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DarkLayout;
