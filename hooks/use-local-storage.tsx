"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T | undefined, Dispatch<SetStateAction<T | undefined>>] {
  const [storedValue, setStoredValue] = useState<T | undefined>(undefined);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      setStoredValue(item ? JSON.parse(item) : initialValue);
    } catch (error) {
      console.log("Error reading localStorage:", error);
      setStoredValue(initialValue);
    }
  }, [key, initialValue]);

  useEffect(() => {
    if (storedValue === undefined) return;
    try {
      const valueToStore =
        typeof storedValue === "function"
          ? (storedValue as (val: T | undefined) => T)(storedValue)
          : storedValue;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
