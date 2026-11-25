import { createContext, useContext } from "react";

// Lets any page open the shared project inquiry dialog owned by the layout.
export const InquiryContext = createContext<() => void>(() => {});

export function useOpenInquiry() {
  return useContext(InquiryContext);
}
