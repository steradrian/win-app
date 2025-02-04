"use client";

import ButtonControl from "@componentes/components/core/ButtonControl";
import LinkControl from "@componentes/components/core/LinkControl";
import SignInForm from "@componentes/components/SignInForm";
import { signInPageText } from "@componentes/utils/text";
import { formatStringToURL } from "@componentes/utils/utils";
import Image, { StaticImageData } from "next/image";
import React, { useCallback } from "react";
import FacebookIcon from "../../assets/facebook-icon.png";
import GoogleIcon from "../../assets/google-icon.png";
import WhiteLayout from "../layouts/WhiteLayout";

function createIconComponent(src: StaticImageData, altText: string) {
  const IconComponent = () => <Image src={src} alt={altText} />;
  return React.memo(IconComponent);
}

const GoogleBtnIcon = createIconComponent(GoogleIcon, signInPageText.googleBtn);
const FacebookBtnIcon = createIconComponent(
  FacebookIcon,
  signInPageText.facebookBtn
);

const SignIn = () => {
  const handleClickGoogle = useCallback(() => {}, []);
  const handleClickFacebook = useCallback(() => {}, []);

  return (
    <WhiteLayout>
      <h1 className="text-textDark text-[1.5rem] font-bold leading-8 text-center">
        {signInPageText.title}
      </h1>
      <div className="flex items-center">
        <p className="text-[0.875rem] leading-5 text-textDark mr-1">
          {signInPageText.subtitle}
        </p>
        <LinkControl
          text={signInPageText.subtitleLink}
          href={`/${formatStringToURL(signInPageText.subtitleLink)}`}
          variant="primary2"
          size="small"
          className="py-[0rem] px-[0rem]"
        />
      </div>
      <div className="flex w-full gap-2 mt-6">
        <ButtonControl
          variant="primary2"
          className="w-full"
          text={signInPageText.googleBtn}
          onClick={handleClickGoogle}
          Icon={GoogleBtnIcon}
        />
        <ButtonControl
          variant="primary2"
          className="w-full"
          text={signInPageText.facebookBtn}
          onClick={handleClickFacebook}
          Icon={FacebookBtnIcon}
        />
      </div>
      <div className="w-full flex items-center gap-2 mt-6">
        <div className="w-full h-[1px] bg-gray" />
        <span className="text-textDark">{signInPageText.separator}</span>
        <div className="w-full h-[1px] bg-gray" />
      </div>
      <SignInForm />
    </WhiteLayout>
  );
};

export default SignIn;
