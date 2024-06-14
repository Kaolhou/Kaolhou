import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Info from "@/components/main/info";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { GitHubCard } from "@/components/main/github-card";
import Container from "@/components/main/container";

export default function ContentMain() {
  return (
    <Container className="flex max-w-[50rem] mx-auto gap-5 flex-wrap md:flex-nowrap mt-4 items-center justify-center p-2 ">
      <div className="basis-[100%]">
        <div className="my-2">
          <span className="text-sm ">Olá eu sou</span>
          <h1 className="text-4xl font-bold">André Mendes</h1>
        </div>
        <p>
          Atuo como desenvolvedor Júnior, moro em São Paulo - SP no Brasil, e me
          formei no curso de Informática para a Internet (período pré-integral)
          na Etec Parque Belém, local de início dos estudos. Atualmente estou
          graduando o curso bacharelado de Ciência da Computação na Faculdade
          Impacta Tecnologia (período matutino), onde estou revendo
          conhecimentos de lógica de programação na linguagem{" "}
          <Info info={"Atualizado 10/05"}>Python</Info>, tenho interesse maior
          em javascript e desenvolvimento web (front-end ou back-end). Sou PCD
          H54.4 (Cegueira em um olho), C69.6 (Neoplasia maligna de órbita), S05
          (Traumatismo do olho e da órbita ocular)
        </p>
      </div>
      <div className="basis-[70%]">
        <HoverCard>
          <HoverCardTrigger>
            <AspectRatio
              ratio={1}
              className="rounded-lg overflow-hidden "
              asChild
            >
              <Image src="/pfp1.jpg" width={500} height={500} alt="pfp" />
            </AspectRatio>
          </HoverCardTrigger>
          <GitHubCard />
        </HoverCard>
      </div>
    </Container>
  );
}
