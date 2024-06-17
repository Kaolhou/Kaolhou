import React from "react";
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiTypescript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiFlutter,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiJava } from "react-icons/di";
import { useTheme } from "next-themes";

export type SingleTechData = {
  title?: string;
  isUsed?: boolean;
  level: "estudando" | "básico" | "intermediário" | "avançado";
  logo: React.ReactElement;
};
export type SingleTech = {
  [key: string]: SingleTechData;
};

export type TypeLang = "backend" | "frontend" | "database";
export type Data = {
  [key in TypeLang]: string[];
};

function NextLogo({ ...props }) {
  const { theme } = useTheme();
  return (
    <RiNextjsFill color={theme == "dark" ? "white" : "black"} {...props} />
  );
}

export const singleTech: SingleTech = {
  html: {
    level: "avançado",
    isUsed: true,
    title: "HTML",
    logo: <SiHtml5 color="#E5532C" />,
  },
  css: {
    level: "avançado",
    isUsed: true,
    title: "CSS",
    logo: <SiCss3 color="#1E3FDA" />,
  },
  javascript: {
    level: "intermediário",
    isUsed: true,
    logo: <SiJavascript color="yellow" />,
  },
  typescript: {
    level: "intermediário",
    logo: <SiTypescript color="#2F74C0" />,
    isUsed: true,
  },

  next: {
    title: "Next.js",
    level: "básico",
    isUsed: true,
    logo: <NextLogo />,
  },
  java: {
    level: "intermediário",
    logo: <DiJava color="#DF121E" className="p-0" />,
  },
  sql: {
    title: "MySQL",
    level: "intermediário",
    logo: <SiJavascript />,
  },
  python: {
    level: "intermediário",
    logo: <SiPython color="#4074A6" />,
  },
  react: {
    level: "intermediário",
    logo: <SiReact color="#5ED3F3" />,
    isUsed: true,
  },
  tailwind: {
    level: "intermediário",
    logo: <SiTailwindcss color="#38BDF8" />,
    isUsed: true,
  },
  flutter: {
    level: "estudando",
    logo: <SiFlutter color="#0E5FA0" />,
  },
};
