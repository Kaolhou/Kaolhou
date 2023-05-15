import github from "../media/github.png";
import instagram from "../media/instagram.png";
import linkedin from "../media/linkedin.png";
import Image, { StaticImageData } from "next/image";

interface itemConteinerProps {
  link: string;
  url: StaticImageData;
  title: string;
  content?: string;
}
interface boxContainerProps {
  children: string | JSX.Element | JSX.Element[];
}

function BoxContainer(props: boxContainerProps) {
  return (
    <div className="flex gap-2 flex-wrap justify-center items-stretch max-w-[40em] m-auto my-6">
      {props.children}
    </div>
  );
}

function ItemConteiner(props: itemConteinerProps) {
  return (
    <a href={props.link} target="_blank" rel="NOREFERRER" data-aos="fade-up">
      <div className="bg-pallete-3 p-4 rounded-lg hover:bg-pallete-1 transition-colors">
        <div className="w-32 h-32 flex items-center justify-center m-0">
          <Image src={props.url} alt="aoba" className="imgImage drag" />
        </div>
        <div className="card-contentA">
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </div>
      </div>
    </a>
  );
}

export default function About() {
  return (
    <div id="about-container" className="min-h-[75vh]">
      <h1>Redes Sociais e Contato</h1>
      <BoxContainer>
        <ItemConteiner
          url={github}
          title="Github"
          link="https://github.com/Kaolhou"
        />
        <ItemConteiner
          url={linkedin}
          title="Linkedin"
          link="https://www.linkedin.com/in/andremrocha-3ab925193/"
        />
        <ItemConteiner
          url={instagram}
          title="Instagram"
          link="https://www.instagram.com/andre._.mendess/"
        />
      </BoxContainer>
    </div>
  );
}
