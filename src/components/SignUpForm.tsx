import React, { useCallback, useState } from "react";
import InputControl from "./core/InputControl";
import { formText } from "@componentes/utils/text";
import CheckboxControl from "./core/CheckboxControl";
import LinkControl from "./core/LinkControl";
import ButtonControl from "./core/ButtonControl";

const SignUpForm = React.memo(() => {
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
      <CheckboxControl
        id="termsAndConditions"
        checked={termsAndConditions}
        onChange={(e) => setTermsAndConditions(e.target.checked)}
      >
        <span className="text-sm leading-[0.875rem] text-dark">
          {formText.privacyPolicy}{" "}
          <LinkControl
            text={formText.privacyPolicyLink}
            href="/term-and-conditions"
            variant="primary2"
            size="small"
            className="px-[0] inline"
            hasHover={false}
          />
        </span>
      </CheckboxControl>
      <div className="mt-3">
        <ButtonControl
          text={formText.createBtn}
          type="submit"
          className="w-full"
          variant="primary2"
          onClick={() => {}}
        />
      </div>
    </form>
  );
});

export default SignUpForm;
