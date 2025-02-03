"use client";

import { footerText } from "@componentes/utils/text";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import CertikLogo from "../../assets/certik-logo.png";
import WinLogo from "../../assets/logo-header.png";
import InstagramLogo from "../../assets/social/instagram-logo.png";
import TelegramLogo from "../../assets/social/telegram-logo.png";
import TwitchLogo from "../../assets/social/twitch-logo.png";
import TwitterLogo from "../../assets/social/twitter-logo.png";
import WinSDK from "../../assets/win-sdk.png";
import { BREAKPOINT } from "./Carousel";
import LinkControl from "./LinkControl";
import ToggleControl from "./ToggleControl";
import Elipsis from "../../assets/footer-elipsis.png";

interface FooterLinkProps {
  linkKey: string;
  linkText: string;
}

function getSocialIcon(text: string) {
  switch (text) {
    case footerText.social.telegram:
      return TelegramLogo;
    case footerText.social.twitch:
      return TwitchLogo;
    case footerText.social.twitter:
      return TwitterLogo;
    case footerText.social.instagram:
    default:
      return InstagramLogo;
  }
}

const FooterLink = ({ linkKey, linkText }: FooterLinkProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < BREAKPOINT);
    };

    // Set the initial state
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <li>
      <LinkControl
        key={linkKey}
        href={`/${linkKey}`}
        text={linkText}
        variant="secondary"
        size="small"
        className="px-[0]"
      />
    </li>
  );
};

const Footer = () => {
  const isMobile = window.innerWidth < BREAKPOINT;
  return (
    <footer className="relative overflow-hidden max-w-[90rem] mx-auto text-textDefault text-[0.875rem] leading-5 md:mt-6 px-3 md:px-[7rem] py-3 md:py-6">
      <hr className="bg-light opacity-10 h-[0.125rem] mb-6" />
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-center mb-8 md:mb-4">
          <Image
            src={WinLogo}
            alt={footerText.disclaimers.winLogo}
            width={98}
            height={24}
          />
          <div className="flex items-center mt-2 gap-10">
            <Image
              src={CertikLogo}
              alt={footerText.disclaimers.certikLogo}
              width={102}
              height={24}
            />
            <Image
              src={WinSDK}
              alt={footerText.disclaimers.winSdk}
              width={64}
              height={12}
            />
          </div>
          <p className="mt-6 mb-2 text-[13px] leading-[13px]">
            {footerText.disclaimers.copyright}
          </p>
          <p className="text-[13px] leading-[13px] text-textSubdued">
            {footerText.disclaimers.message}
          </p>
        </div>
        {isMobile && (
          <div className="flex space-x-4 mb-8 justify-center">
            {Object.entries(footerText.social).map(([key, text]) => (
              <div
                className="rounded-full p-[0.625rem] cursor-pointer transition-colors 
        duration-300 ease-nice-ease  bg-darkModal hover:bg-lightest"
                key={`social-${key}`}
              >
                <Image
                  src={getSocialIcon(text)}
                  alt={text}
                  width={20}
                  height={20}
                  className=" rounded-full"
                />
              </div>
            ))}
          </div>
        )}

        <nav className="flex flex-wrap gap-[1.5rem] md:gap-[4.5rem] mb-6 md:mb-[0]">
          {Object.entries(footerText.nav).map(([key, group]) => (
            <div className="flex flex-col" key={key}>
              <h3 className="font-bold text-md mb-2">{group.title}</h3>
              <ul className="flex flex-col">
                {Object.entries(group.links).map(([linkKey, linkText]) => (
                  <FooterLink
                    key={linkKey}
                    linkKey={linkKey}
                    linkText={linkText}
                  />
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="flex flex-col items-center md:items-end justify-between">
          {!isMobile && (
            <div className="flex space-x-4 mb-4">
              {Object.entries(footerText.social).map(([key, text]) => (
                <div
                  className="rounded-full p-[0.625rem] cursor-pointer transition-colors 
        duration-300 ease-nice-ease  bg-darkModal hover:bg-lightest"
                  key={`social-${key}`}
                >
                  <Image
                    src={getSocialIcon(text)}
                    alt={text}
                    width={20}
                    height={20}
                    className=" rounded-full"
                  />
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center">
            <ToggleControl
              disabledText={footerText.toggle.am}
              activeText={footerText.toggle.pm}
            />
          </div>
        </div>
      </div>
      <Image
        src={Elipsis}
        alt="elipsis"
        className="absolute bottom-0 md:bottom-[-600%] left-0 w-full"
      />
    </footer>
  );
};

export default Footer;
