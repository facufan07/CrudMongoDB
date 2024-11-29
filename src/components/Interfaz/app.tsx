import { useState, useEffect } from "react";
import Coincidencias from "../Coincidencias/app";
import InputBuscar from "../InputBuscar/app";
import InputOrdenar from "../InputOrdenar/app";
import ButtonSelected from "../ButtonSelected/app";
import Desarrolladores from "../Desarrolladores/app";
import axios from "axios";

interface Desarrollador{
    nombre: string;
    apellido: string;
    edad: number;
    puesto: string;
    seniority: string;
    salario: number;
    _id: string
}

interface Props{
    setDeleted: (deleted: boolean) => void
    deleted: boolean
    setEdited: (edited: boolean) => void
    edited: boolean
    setId: (id: string) => void
    create: boolean
    setCreate: (create: boolean) => void
}

export default function Interfaz({setDeleted, deleted, setEdited, edited, setId, create, setCreate}:Props){
    const ordenamiento = {info: ["Edad", "Salario"]};
    const seniority = ["Junior", "SSR", "Senior"];
    const puesto = ["Frontend", "Backend", "FullStack"];

    const [getId, setGetId] = useState<string>("");
    const [select, setSelect] = useState<string>("Ordenar por");
    const [text, setText] = useState<string[]>([]);
    const [value, setValue] = useState<string>("");
    const [data, setData] = useState<Desarrollador[]>([]);
    const [originalData, setOriginalData] = useState<Desarrollador[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    function eliminarDesarrollador(id: string) {
        axios.delete(`https://prueba-o76z.onrender.com/desarrolladores/eliminar/${id}`)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        axios.get("https://prueba-o76z.onrender.com/desarrolladores/traer")
        .then(response => {
            setData(response.data);
            setOriginalData(response.data);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        })
    }, [deleted, edited, create]);

    useEffect(() => {
        let filteredData = [...originalData];
    
        if (text.length === 1) {
            filteredData = filteredData.filter(
            (desarrollador) => text.includes(desarrollador.seniority) || text.includes(desarrollador.puesto)
            );
        }else if (text.length > 1) {
            filteredData = filteredData.filter(
            (desarrollador) => text.includes(desarrollador.seniority) && text.includes(desarrollador.puesto)
            );
        }

        if(value !== ""){
            filteredData = filteredData.filter(
                (desarrollador) => desarrollador.nombre.toLowerCase().startsWith(value.toLowerCase())
            )
        }
    
        if (select === "Edad") {
            filteredData = filteredData.sort((a, b) => a.edad - b.edad);
        } else if (select === "Salario") {
            filteredData = filteredData.sort((a, b) => a.salario - b.salario);
        }
    
        setData(filteredData);
    }, [select, text, value]);

    return(
        <section className="h-[90vh] w-4/5 rounded-lg border border-gray-950 shadow-lg flex flex-col overflow-y-hidden max-sm:h-[100vh] max-sm:w-full">
            <div className="flex justify-between px-8 pt-6 pb-2 items-center max-sm:flex-col max-sm:gap-3">
                <Coincidencias
                dato = {data.length}
                />
                <InputBuscar
                setValue={setValue}
                />
            </div>

            <div className="flex px-8 py-2 max-sm:flex-col">
                <section className="w-1/3 flex flex-col max-sm:w-full">
                    <InputOrdenar
                    data={ordenamiento}
                    selected={setSelect}
                    theme={select}
                    />

                    <div className="flex flex-col">
                        <span className="text-oscuroLetra text-sm font-semibold mt-5 mb-2">Seniority</span>
                        <div className="flex flex-col max-sm:flex-row max-sm:gap-2">
                            {seniority.map((option, key) => (
                                <ButtonSelected textArray={text} setText={setText} text={option} key={key}/>
                            ))}
                        </div>
                        
                    </div>
                    
                    <div className="flex flex-col">
                        <span className="text-oscuroLetra text-sm font-semibold mt-5 mb-2">Puesto</span>
                        <div className="flex flex-col max-sm:flex-row max-sm:gap-2">
                            {puesto.map((option, key) => (
                                <ButtonSelected textArray={text} setText={setText} text={option} key={key}/>
                            ))}
                        </div>
                        
                    </div>
                    <div className="flex flex-col max-sm:flex-row max-sm:gap-4 max-sm:mt-4 max-sm:mb-4">
                        <button 
                        className="bg-greenButton text-white px-2 py-2 rounded-lg mt-3"
                        onClick={() => setCreate(true)}
                        >
                            Crear
                        </button>
                        <button 
                        className={`${getId !== "" ? "" : "hidden"} bg-redButton text-white px-2 py-2 rounded-lg mt-3`}
                        onClick={() => {
                            if(getId !== ""){
                                eliminarDesarrollador(getId); 
                                setDeleted(true)
                            }
                            
                        }}
                        >
                            Eliminar
                        </button>
                        
                        <button 
                        className={`${getId !== "" ? "" : "hidden"} bg-blueButton text-white px-2 py-2 rounded-lg mt-3`}
                        onClick={() => {
                            if(getId !== ""){
                                setEdited(true)
                                setId(getId);
                            }
                            
                        }}
                        >
                            Editar
                        </button>
                    </div>
                    
                </section>

                <section className="px-10 relative  max-h-full max-sm:flex">
                    <Desarrolladores
                    data={data}
                    setGetId={setGetId}
                    loading={loading}
                    error={error}
                    />
                </section>
            </div>
            
        </section>
    )
}
