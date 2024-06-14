import React from "react";
import { SiJavascript, SiCss3 } from "react-icons/si";
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

export const singleTech: SingleTech = {
  javascript: {
    level: "intermediário",
    isUsed: true,
    logo: <SiJavascript size={"100%"} color="yellow" />,
  },
  css: {
    level: "avançado",
    isUsed: true,
    title: "CSS",
    logo: <SiCss3 size={"100%"} color="#1E3FDA" />,
  },
  html: {
    level: "avançado",
    isUsed: true,
    title: "HTML",
    logo: <SiJavascript size={"100%"} />,
  },

  next: {
    title: "Next.js",
    level: "básico",
    isUsed: true,
    logo: <SiJavascript size={"100%"} />,
  },
  java: {
    level: "intermediário",
    logo: <SiJavascript size={"100%"} />,
  },
  sql: {
    title: "MySQL",
    level: "intermediário",
    logo: <SiJavascript size={"100%"} />,
  },
};
