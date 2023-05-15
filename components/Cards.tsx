import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Aos from "aos";

interface boxProps {
  children: JSX.Element[] | JSX.Element | string;
}
interface itemBoxProps {
  link: string;
  url: string | StaticImageData;
  title: string;
  content:
    | "Intermediário"
    | "Estudando"
    | "Avançado"
    | "Básico"
    | "Interessado";
  used?: boolean | null;
}

function BoxContainer(props: boxProps) {
  return <div className="flex flex-wrap justify-center">{props.children}</div>;
}

function ItemConteiner(props: itemBoxProps) {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <a href={props.link} target="_blank" rel="NOREFERRER" data-aos="fade-up">
      <div
        className={`min-w-[10em] max-w-[10em] min-h-[208px] bg-[#333333] m-2 p-4 rounded-lg 
    select-none shadow-[5px_7px_20px_0_rgba(0,0,0,.5)] hover:shadow-[0px_0px_10px_0_rgba(0,0,0,.5)] 
    transition-shadow `}
        data-title={props.used ? "Usado nesse site" : undefined}
      >
        <div className="imgBox">
          <Image src={props.url} alt="aoba" className="person drag" />
        </div>
        <div className="card-content">
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </div>
      </div>
    </a>
  );
}
export { BoxContainer, ItemConteiner };
