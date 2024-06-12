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
    <Card className="p-3">
      <CardTitle>{title ?? capitalize(i)}</CardTitle>
      <CardContent className="mt-2">{singleTech[i].logo}</CardContent>
    </Card>
  );
}
export default function Technologies() {
  const tech: Data = {
    frontend: ["javascript", "css", "css", "css"],
    backend: ["next", "java"],
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
            <TabsContent value={i} key={key} className="flex gap-2 flex-wrap">
              {tech[i as keyof Data].map((i, key) =>
                Boolean(singleTech[i].isUsed) ? (
                  <HoverCard key={key}>
                    <HoverCardTrigger className="basis-[100%] ssm:basis-[48%] sm:basis-[48%] md:basis-[48%] lg:basis-[30%]">
                      <TechCard {...singleTech[i]} i={i} />
                    </HoverCardTrigger>
                    <HoverCardContent>usado nesse site</HoverCardContent>
                  </HoverCard>
                ) : (
                  <div
                    key={key}
                    className="basis-[100%] sm:basis-[48%] md:basis-[48%] lg:basis-[30%]"
                  >
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
