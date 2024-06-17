"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { Switch } from "../ui/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [isClient, setIsClient] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsClient(true);
  }, []);
  const Component = (
    <span className="flex justify-center items-center gap-1 pr-3 sm:pr-0 cursor-pointer">
      <label
        htmlFor="toggle-theme"
        className="flex justify-center items-center cursor-pointer"
      >
        <span className="hidden sm:inline-block">
          <SunIcon />
        </span>
      </label>
      <Switch
        id="toggle-theme"
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        checked={theme == "dark"}
        defaultChecked={theme == "dark"}
      />
      <label
        htmlFor="toggle-theme"
        className="flex justify-center items-center cursor-pointer"
      >
        <span className="hidden sm:inline-block">
          <MoonIcon />
        </span>
      </label>
    </span>
  );
  if (!isClient) {
    return (
      <span className="flex justify-center items-center gap-1 pr-3 sm:pr-0">
        <label
          htmlFor="toggle-theme"
          className="flex justify-center items-center"
        >
          <span className="hidden sm:inline-block">
            <SunIcon />
          </span>
        </label>
        <Switch id="toggle-theme" />
        <label
          htmlFor="toggle-theme"
          className="flex justify-center items-center"
        >
          <span className="hidden sm:inline-block">
            <MoonIcon />
          </span>
        </label>
      </span>
    );
  }

  return Component;
}
