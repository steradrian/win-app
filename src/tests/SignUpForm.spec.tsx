// SignUpForm.test.tsx
import SignUpForm from "../components/SignUpForm";
import useSignUp from "../lib/hooks/useSignUp";
import { formText } from "@componentes/utils/text";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { SIGN_UP_MUTATION } from "@componentes/lib/mutations/signUp/signUpMutation";

const mocks = [
  {
    request: {
      query: SIGN_UP_MUTATION, // Use "query" here because it's how Apollo Client expects it
      variables: {
        input: { name }, // Adjust according to your mutation's variable structure
      },
    },
    result: {
      data: {
        signUp: {
          // Assuming "signUp" is the name of the field returned from your mutation
          id: "1",
          name: "testUser",
          email: "test@example.com",
          __typename: "User", // Include __typename to match the expected shape of the GraphQL response
        },
      },
    },
  },
];

// Mock the useSignUp hook
jest.mock("../lib/hooks/useSignUp");

describe("SignUpForm", () => {
  const mockSignUp = jest.fn();

  beforeEach(() => {
    (useSignUp as jest.Mock).mockReturnValue({
      mutate: mockSignUp,
    });
  });

  const renderSignUpForm = () => {
    render(
      <MockedProvider>
        <SignUpForm />
      </MockedProvider>
    );
  };

  test("renders the form with all input fields and button", () => {
    renderSignUpForm();

    expect(screen.getByLabelText(formText.email.label)).toBeInTheDocument();
    expect(screen.getByLabelText(formText.password.label)).toBeInTheDocument();
    expect(
      screen.getByLabelText(formText.confirmPassword.label)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: formText.createBtn })
    ).toBeInTheDocument();
  });

  test("updates email input value", () => {
    renderSignUpForm();
    const emailInput = screen.getByLabelText(
      formText.email.label
    ) as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput.value).toBe("test@example.com");
  });

  test("submits the form with valid data", async () => {
    renderSignUpForm();

    fireEvent.change(screen.getByLabelText(formText.email.label), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(formText.password.label), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText(formText.confirmPassword.label), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: formText.createBtn }));

    await waitFor(() => {
      expect(mockSignUp).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "password123",
        confirmPassword: "password123",
      });
    });
  });

  test("displays error message when sign-up fails", async () => {
    mockSignUp.mockImplementation((input, { onError }) =>
      onError({ message: "Sign up failed" })
    );

    renderSignUpForm();

    fireEvent.change(screen.getByLabelText(formText.email.label), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(formText.password.label), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText(formText.confirmPassword.label), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: formText.createBtn }));

    const errorMessage = await screen.findByText("Sign up failed");
    expect(errorMessage).toBeInTheDocument();
  });
});
