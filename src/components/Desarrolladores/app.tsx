import Desarrollador from "../Desarrollador/app"
import { useState } from "react"
import "./style.css"
interface Desarrollador{
    nombre: string;
    apellido: string;
    edad: number;
    puesto: string;
    seniority: string;
    salario: number;
    _id: string
}
interface Props {
    data: Desarrollador[]
    setGetId: (id: string) => void
    loading: boolean
    error: boolean
}
export default function Desarrolladores({data, setGetId, loading, error}:Props) {
    const [selectedId, setSelectedId] = useState<string>("");

    function setClickable(id: string) {
        if (selectedId === id) {
            setSelectedId("");
            setGetId("");
        }else{
            setSelectedId(id);
            setGetId(id);
        }
        
    }

    return(
        <div className="w-full max-sm:w-[100vw] ">
            <div className="grid grid-cols-6 max-sm:grid-cols-3 gap-4 text-center px-2">
                <span className="text-blancoLetra font-semibold">Nombre</span>
                <span className="text-blancoLetra font-semibold">Apellido</span>
                <span className="text-blancoLetra font-semibold">Edad</span>
                <span className="text-blancoLetra font-semibold">Puesto</span>
                <span className="text-blancoLetra font-semibold">Seniority</span>
                <span className="text-blancoLetra font-semibold">Salario</span>
            </div>
            <div className="w-full h-[2px] bg-oscuroClaro my-5"></div>

            {loading && <p className="text-blancoLetra font-semibold">Cargando...</p>}

            {error && <p className="text-blancoLetra font-semibold">Error al cargar los desarrolladores</p>}

            <div className="overflow-y-auto max-h-[500px] max-sm:max-h-[340px] scroll">
                {data.map((desarrollador, key) => (
                    <Desarrollador
                    key={key}
                    nombre={desarrollador.nombre}
                    apellido={desarrollador.apellido}
                    edad={desarrollador.edad}
                    puesto={desarrollador.puesto}
                    seniority={desarrollador.seniority}
                    salario={desarrollador.salario}
                    _id={desarrollador._id}
                    onClick={() => setClickable(desarrollador._id)}
                    selectedId={selectedId}
                    />
                ))}
            </div>
            
        </div>
    )
}