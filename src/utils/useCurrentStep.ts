"use client";

import { usePathname } from "next/navigation";

/**
 * Custom hook to determine the current step based on the route.
 * @returns {number} The current step number.
 */
function useCurrentStep(): number {
  const pathname = usePathname();

  switch (pathname) {
    case "/sign-up/referral":
      return 1;
    case "/sign-up/create":
      return 2;
    case "/sign-up/wallet":
      return 3;
    default:
      return 0; // Default value for unmatched routes
  }
}

export default useCurrentStep;
