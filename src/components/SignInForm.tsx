import useSignIn from "@componentes/lib/hooks/useSignIn";
import { SignInInput } from "@componentes/lib/types/signInTypes";
import { formText } from "@componentes/utils/text";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import ButtonControl from "./core/ButtonControl";
import InputControl from "./core/InputControl";
import LinkControl from "./core/LinkControl";

const SignInForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const router = useRouter();

  const {
    mutate: signIn,
    // isLoading,
  } = useSignIn();

  const resetErrorMessage = useCallback(() => {
    setErrorMessage(undefined);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const input: SignInInput = { email, password };

      signIn(input, {
        onSuccess: (data) => {
          if ("accessToken" in data) {
            localStorage.setItem("accessToken", data.accessToken);
            router.push("/");
          } else if ("message" in data) {
            setErrorMessage(data.message);
          }
        },
        onError: (error) => {
          setErrorMessage(error.message || "An unknown error occurred.");
        },
      });
    },
    [signIn, email, password, router]
  );

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 mt-6">
      {errorMessage && <p className="text-critical mb-5">{errorMessage}</p>}{" "}
      <InputControl
        id={formText.email.label}
        label={formText.email.label}
        type="email"
        placeholder={formText.email.placeholder}
        value={email}
        required={true}
        onChange={(e) => setEmail(e.target.value)}
        onFocus={resetErrorMessage}
      />
      <InputControl
        id={formText.password.label}
        label={formText.password.label}
        type="password"
        placeholder={formText.password.placeholder}
        value={password}
        required={true}
        onChange={(e) => setPassword(e.target.value)}
        onFocus={resetErrorMessage}
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
        />
      </div>
    </form>
  );
};

export default SignInForm;
