"use client";

import ButtonControl from "@componentes/components/core/ButtonControl";
import LinkControl from "@componentes/components/core/LinkControl";
import StepIndicator from "@componentes/components/core/StepIndicator";
import SignUpForm from "@componentes/components/SignUpForm";
import { signUpPageText } from "@componentes/utils/text";
import useCurrentStep from "@componentes/utils/useCurrentStep";
import { formatStringToURL } from "@componentes/utils/utils";
import Image, { StaticImageData } from "next/image";
import React, { useCallback } from "react";
import FacebookIcon from "../../../assets/facebook-icon.png";
import GoogleIcon from "../../../assets/google-icon.png";
import WhiteLayout from "../../layouts/WhiteLayout";

function createIconComponent(src: StaticImageData, altText: string) {
  const IconComponent = () => <Image src={src} alt={altText} />;
  return React.memo(IconComponent);
}

const GoogleBtnIcon = createIconComponent(GoogleIcon, signUpPageText.googleBtn);
const FacebookBtnIcon = createIconComponent(
  FacebookIcon,
  signUpPageText.facebookBtn
);

const SignUp = () => {
  const currentStep = useCurrentStep();

  const handleClickGoogle = useCallback(() => {}, []);
  const handleClickFacebook = useCallback(() => {}, []);

  return (
    <WhiteLayout>
      <StepIndicator currentStep={currentStep} />
      <h1 className="text-textDark text-[1.5rem] font-bold leading-8 text-center">
        {signUpPageText.title}
      </h1>
      <div className="flex items-center">
        <p className="text-[0.875rem] leading-5 text-textDark mr-1">
          {signUpPageText.subtitle}
        </p>
        <LinkControl
          text={signUpPageText.subtitleLink}
          href={`/${formatStringToURL(signUpPageText.subtitleLink)}`}
          variant="primary2"
          size="small"
          className="py-[0rem] px-[0rem]"
        />
      </div>
      <div className="flex w-full gap-2 mt-6">
        <ButtonControl
          variant="primary2"
          className="w-full"
          text={signUpPageText.googleBtn}
          onClick={handleClickGoogle}
          Icon={GoogleBtnIcon}
        />
        <ButtonControl
          variant="primary2"
          className="w-full"
          text={signUpPageText.facebookBtn}
          onClick={handleClickFacebook}
          Icon={FacebookBtnIcon}
        />
      </div>
      <div className="w-full flex items-center gap-2 mt-6">
        <div className="w-full h-[1px] bg-gray" />
        <span className="text-textDark">{signUpPageText.separator}</span>
        <div className="w-full h-[1px] bg-gray" />
      </div>
      <SignUpForm />
    </WhiteLayout>
  );
};

export default SignUp;
