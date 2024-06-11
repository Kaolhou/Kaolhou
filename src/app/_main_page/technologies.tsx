"use client";
import Container from "@/components/main/container";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
type TypeLang = "backend" | "frontend" | "database";
type Data = {
  [key in TypeLang]: string[];
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
            <TabsContent value={i} key={key}>
              {
                <ul>
                  {tech[i as keyof Data].map((i, key) => (
                    <li key={key}>{i}</li>
                  ))}
                </ul>
              }
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </Container>
  );
}
