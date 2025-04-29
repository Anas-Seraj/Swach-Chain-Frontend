import { createContext, useState } from "react";

export const InfoStore = createContext({ isSignedIn: false, error: null, handleSignIn: (logState) => {} });

export default function InfoStoreProvider({ children }) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [error, setError] = useState(null);

  function handleSignIn(logState: boolean) {
    setIsSignedIn(logState);
  }

  const info = { isSignedIn, error, handleSignIn };

  return <InfoStore.Provider value={info}>{children}</InfoStore.Provider>;
}
