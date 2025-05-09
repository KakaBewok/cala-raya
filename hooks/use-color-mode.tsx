import { useEffect } from "react";
import useLocalStorage from "./use-local-storage";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage<"light" | "dark">(
    "color-theme",
    "light"
  );

  useEffect(() => {
    if (!colorMode) return;
    const className = "dark";
    const bodyClass = window.document.body.classList;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    colorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [colorMode]);

  return [colorMode, setColorMode] as const;
};

export default useColorMode;
