"use client";

import { headerText } from "@componentes/utils/text";
import { useState } from "react";

const WalletStatus = () => {
  // State to manage wallet connection
  const [walletConnected, setWalletConnected] = useState(false);
  const [wallet, setWallet] = useState<{ name: string } | null>(null);

  return (
    <div
      className="
      hidden
      md:flex 
      items-center 
      ml-6 
      py-1 
      px-2 
      bg-[rgba(255,255,255,0.03)] 
      shadow-md 
      rounded-xl 
      cursor-pointer 
      transition-colors 
      duration-300 
      ease-nice-ease 
      hover:bg-[rgba(255,255,255,0.07)] 
      focus:outline-none
    "
    >
      <div
        className={`w-1.5 h-1.5 rounded-full ${
          walletConnected ? "bg-success" : "bg-critical"
        }`}
      />
      <div className="ml-1 text-default text-xs leading-4 font-medium text-textDefault">
        {headerText.walletStatus.description}
      </div>
      <div
        className={`ml-1 text-xs font-medium ${
          walletConnected ? "text-primary" : "text-textDisabled"
        }`}
      >
        {walletConnected ? wallet?.name : headerText.walletStatus.notConnected}
      </div>
    </div>
  );
};

export default WalletStatus;
