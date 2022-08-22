import Image from "next/image"
import img from '../media/andre.jpg'

export function Content(){
    return(
        <div className='flex flex-wrap gap-10 justify-between items-center min-h-[50vh] py-0 xl:py-20'>
            <div className="max-w-lg min-w-[md] text-justify">
                <h1>Olá!</h1>
                <p className="indent-7 pl-0 md:pl-6">
                    Meu nome é André Mendes da Rocha, sou um desenvolvedor Júnior, moro em São Paulo - SP no Brasil, e me formei no curso de Informática para a Internet (período pré-integral) na <a href="https://www.etecpqbelem.com.br" target='_blank' rel='NOREFERRER' className='und'>Etec Parque Belém</a>, local de início dos estudos. Atualmente estou graduando o curso bacharelado de Ciência da Computação na <a href="https://www.impacta.edu.br" target='_blank' rel="noreferrer" className="und">Faculdade Impacta Tecnologia</a> (período matutino), onde estou revendo conhecimentos de lógica de programação na linguagem Python (Atualizado 10/05), tenho interesse maior em javascript e  desenvolvimento web (front-end ou back-end). Sou PCD H54.4 (Cegueira em um olho), C69.6 (Neoplasia maligna de órbita), S05 (Traumatismo do olho e da órbita ocular)
                </p>
            </div>
            <div className='max-w-sm rounded-xl overflow-hidden'>
                <Image src={img} alt="foto" className='drag' />
            </div>
        </div>
    )
}