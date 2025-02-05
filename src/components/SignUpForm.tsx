import useSignUp from "../lib/hooks/useSignUp";
import { SignUpInput } from "../lib/types/signUpTypes";
import { formText } from "../utils/text";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import ButtonControl from "./core/ButtonControl";
import CheckboxControl from "./core/CheckboxControl";
import InputControl from "./core/InputControl";
import LinkControl from "./core/LinkControl";

const SignUpForm = React.memo(() => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [termsAndConditions, setTermsAndConditions] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const router = useRouter();

  const {
    mutate: signUp,
    // isPending,
  } = useSignUp();

  const resetErrorMessage = useCallback(() => {
    setErrorMessage(undefined);
  }, [setErrorMessage]);

  const handleChekbox = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTermsAndConditions(e.target.checked);
      resetErrorMessage();
    },
    [resetErrorMessage, setTermsAndConditions]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const input: SignUpInput = { email, password, confirmPassword };

      signUp(input, {
        onSuccess: (data) => {
          if ("accessToken" in data) {
            localStorage.setItem("accessToken", data.accessToken);
            router.push("/");
          }
        },
        onError: (error) => {
          if (error.message) {
            setErrorMessage(error.message);
          } else {
            setErrorMessage("An unknown error occurred.");
          }
        },
      });
    },
    [signUp, router]
  );

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 mt-6">
      <p className="text-critical mb-5">{errorMessage}</p>
      <InputControl
        id={formText.email.label}
        label={formText.email.label}
        type="text"
        placeholder={formText.email.placeholder}
        value={email}
        required={true}
        onChange={(e) => setEmail(e.target.value)}
        onFocus={resetErrorMessage}
      />
      <InputControl
        id={formText.password.label}
        label={formText.password.label}
        type="text"
        placeholder={formText.password.placeholder}
        value={password}
        required={true}
        onChange={(e) => setPassword(e.target.value)}
        onFocus={resetErrorMessage}
      />
      <InputControl
        id={formText.confirmPassword.label}
        label={formText.confirmPassword.label}
        type="text"
        placeholder={formText.confirmPassword.placeholder}
        value={confirmPassword}
        required={true}
        onChange={(e) => setConfirmPassword(e.target.value)}
        onFocus={resetErrorMessage}
      />
      <CheckboxControl
        id="termsAndConditions"
        checked={termsAndConditions}
        onChange={handleChekbox}
        required={true}
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
        />
      </div>
    </form>
  );
});

export default SignUpForm;
