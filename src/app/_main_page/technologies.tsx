"use client";
import Container from "@/components/main/container";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import capitalize from "@/lib/utils";
import { TabsContent } from "@radix-ui/react-tabs";
import { Data, SingleTechData, singleTech } from "../_info/tech";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function TechCard({ i, title }: SingleTechData & { i: string }) {
  return (
    <Card className="p-3 h-full">
      <CardTitle>{title ?? capitalize(i)}</CardTitle>
      <CardContent className="mt-2 flex flex-col mx-auto justify-center">
        {{
          ...singleTech[i].logo,
          props: { ...singleTech[i].logo.props, size: "100%" },
        }}
      </CardContent>
    </Card>
  );
}
export default function Technologies() {
  const tech: Data = {
    frontend: [
      "html",
      "css",
      "javascript",
      "typescript",
      "react",
      "next",
      "tailwind",
      "flutter",
    ],
    backend: ["javascript", "typescript", "next", "java", "python"],
    database: ["sql"],
  };

  return (
    <Container className="flex-col">
      <h2 className="text-3xl font-bold block">Tecnologias</h2>
      <Tabs defaultValue="frontend" className="flex my-6 gap-2">
        <TabsList className="flex flex-col max-w-28 h-fit w-[100%] py-2 px-0 bg-secondary">
          {Object.keys(tech).map((i, key) => (
            <TabsTrigger value={i} key={key} className="hover:text-foreground">
              {capitalize(i)}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex-1">
          {Object.keys(tech).map((i, key) => (
            <TabsContent
              value={i}
              key={key}
              className="md:grid-cols-3 ssm:grid-cols-2 grid-cols-1	grid gap-3 auto-rows-[1fr]"
            >
              {tech[i as keyof Data].map((i, key) =>
                Boolean(singleTech[i].isUsed) ? (
                  <HoverCard key={key}>
                    <HoverCardTrigger className="">
                      <TechCard {...singleTech[i]} i={i} />
                    </HoverCardTrigger>
                    <HoverCardContent>Usado nesse site</HoverCardContent>
                  </HoverCard>
                ) : (
                  <div key={key}>
                    <TechCard {...singleTech[i]} i={i} />
                  </div>
                )
              )}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </Container>
  );
}
