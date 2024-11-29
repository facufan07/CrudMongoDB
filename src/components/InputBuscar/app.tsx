import svg from "../../assets/Search.svg";

interface Props {
    setValue: (value: string) => void
}
export default function InputBuscar({setValue}:Props) {
    return(
        <div className="flex shadow-md">
            <img 
            className="bg-oscuroClaro rounded-l-lg pl-2 py-1" 
            src={svg} 
            alt="Buscar" 
            />

            <input 
            className="bg-oscuroClaro placeholder:text-oscuroLetra text-blancoLetra rounded-r-lg px-2 py-1 outline-none" 
            type="text" 
            placeholder="Buscar por nombre..." 
            onChange={(e) => setValue(e.target.value)}
            />
        </div>
        
    )
}