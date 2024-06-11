"use client";
import Container from "@/components/main/container";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import capitalize from "@/lib/utils";
import { TabsContent } from "@radix-ui/react-tabs";
type TypeLang = "backend" | "frontend" | "database";
type Data = {
  [key in TypeLang]: string[];
};
type SingleTech = {
  [key: string]: {
    title?: string;
    isUsed?: boolean;
    level: "estudando" | "básico" | "intermediário" | "avançado";
    //logo: string
  };
};
const singleTech: SingleTech = {
  javascript: {
    level: "intermediário",
    isUsed: true,
  },
  css: {
    level: "avançado",
    isUsed: true,
    title: "CSS",
  },
  html: {
    level: "avançado",
    isUsed: true,
    title: "HTML",
  },
  next: {
    title: "Next.js",
    level: "básico",
    isUsed: true,
  },
  java: {
    level: "intermediário",
  },
  sql: {
    title: "MySQL",
    level: "intermediário",
  },
};
export default function Technologies() {
  const tech: Data = {
    frontend: ["javascript", "css"],
    backend: ["next", "java"],
    database: ["sql"],
  };

  return (
    <Container className="flex-col">
      <h2 className="text-4xl font-bold block">Tecnologias</h2>
      <Tabs defaultValue="frontend" className="flex my-6 gap-2">
        <TabsList className="flex flex-col max-w-28 h-fit w-[100%] py-2 px-0 bg-secondary">
          {Object.keys(tech).map((i, key) => (
            <TabsTrigger value={i} key={key}>
              {i}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex-1">
          {Object.keys(tech).map((i, key) => (
            <TabsContent value={i} key={key} className="flex gap-2">
              {tech[i as keyof Data].map((i, key) => (
                <Card key={key} className="basis-[33%] p-3">
                  <CardTitle>{singleTech[i].title ?? capitalize(i)}</CardTitle>
                  <CardContent>teste</CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </Container>
  );
}
