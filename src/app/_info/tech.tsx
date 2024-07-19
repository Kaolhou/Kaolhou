import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiFlutter,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import NextLogo from "../_svgs/next";
import { Html } from "../_svgs/html";
import Css from "../_svgs/css";
import Flutter from "../_svgs/flutter";
import Java from "../_svgs/java";
import Python from "../_svgs/python";
import Typescript from "../_svgs/typescript";

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
  html: {
    level: "avançado",
    isUsed: true,
    title: "HTML",
    logo: <Html />,
  },
  css: {
    level: "avançado",
    isUsed: true,
    title: "CSS",
    logo: <Css />,
  },
  javascript: {
    level: "intermediário",
    isUsed: true,
    logo: <SiJavascript color="yellow" />,
  },
  typescript: {
    level: "intermediário",
    logo: <Typescript />,
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
    logo: <Java />,
  },
  sql: {
    title: "MySQL",
    level: "intermediário",
    logo: <SiJavascript />,
  },
  python: {
    level: "intermediário",
    logo: <Python />,
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
    logo: <Flutter />,
  },
};
