import React, { useCallback, useState } from "react";
import InputControl from "./core/InputControl";
import { formText } from "@componentes/utils/text";
import LinkControl from "./core/LinkControl";
import ButtonControl from "./core/ButtonControl";

const SignInForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [termsAndConditions, setTermsAndConditions] = useState<boolean>(false);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle form submit
  }, []);
  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 mt-6">
      <InputControl
        id={formText.email.label}
        label={formText.email.label}
        type="text"
        placeholder={formText.email.placeholder}
        value={email}
        required={true}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputControl
        id={formText.password.label}
        label={formText.password.label}
        type="text"
        placeholder={formText.password.placeholder}
        value={password}
        required={true}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p className="text-sm leading-[0.875rem] text-dark">
        {formText.forgotPassword}{" "}
        <LinkControl
          text={formText.forgotPasswordLink}
          href="/reset-password"
          variant="primary2"
          size="small"
          className="px-[0] inline"
          hasHover={false}
        />
      </p>
      <div className="mt-3">
        <ButtonControl
          text={formText.signInBtn}
          type="submit"
          className="w-full"
          variant="primary2"
          onClick={() => {}}
        />
      </div>
    </form>
  );
};

export default SignInForm;
