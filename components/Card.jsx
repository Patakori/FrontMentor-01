import Opcoes from "./Opcoes"
import Texto from "./Texto"
import Titulo from "./Titulo"
import Image from "next/image"
import imgReuniao from "../public/img/mobile.jpg"

export default function Card(props){
    return(
        <div className="h-full p-6 flex flex-col desk:flex-row-reverse desk:h-1/2 desk:px-40">
            <div className="bg-softViolet flex flex-grow-0 rounded-t-lg desk:flex-none desk:w-1/2 desk:rounded-t-none desk:rounded-r-lg">
                <Image className="mix-blend-multiply opacity-80" src={imgReuniao} alt="Reunião" />
            </div>
            <div className="bg-darkDesBlue flex flex-col flex-grow content-center items-center rounded-b-lg desk:rounded-b-none desk:rounded-l-lg">
                <Titulo />
                <Texto />
                <Opcoes />
            </div>
        </div>
    )
}