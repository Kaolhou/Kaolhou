import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiNextjsFill } from "react-icons/ri";

export default function NextLogo({ ...props }) {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <RiNextjsFill
      color={theme == "dark" && isClient ? "white" : "black"}
      {...props}
    />
  );
}
