"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { Switch } from "../ui/switch";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <span className="flex justify-center items-center gap-1 pr-3 md:pr-0">
      <label
        htmlFor="toggle-theme"
        className="flex justify-center items-center"
      >
        <span className="hidden md:inline-block">
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
        className="flex justify-center items-center"
      >
        <span className="hidden md:inline-block">
          <MoonIcon />
        </span>
      </label>
    </span>
  );
}
