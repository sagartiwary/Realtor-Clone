import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

export const AuthState = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setloggedIn(true);
      }
      setLoading(false);
    });
  }, []);
  return { loggedIn, loading };
};
