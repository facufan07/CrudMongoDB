import axios from "axios";
import InputNumber from "../InputNumber/app";
import InputText from "../InputText/app";
import { useState } from "react";
import InputOrdenar from "../InputOrdenar/app";

interface Props {
    setNew: (edited: boolean) => void
    setCreated: (created: boolean) => void
}

export default function InterfazAniadir({setNew, setCreated}:Props) {
    const [nombre, setNombre] = useState<string>("");
    const [apellido, setApellido] = useState<string>("");
    const [edad, setEdad] = useState<number>(0);
    const [puesto, setPuesto] = useState<string>("");
    const [seniority, setSeniority] = useState<string>("");
    const [salario, setSalario] = useState<number>(1000);

    const puestos = ["Backend", "Frontend", "FullStack"];
    const Seniority = ["Junior", "SSR", "Senior"];


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        guardarDesarrollador();
    }

    function guardarDesarrollador() {
        axios.post(`https://prueba-o76z.onrender.com/desarrolladores/crear`, {nombre, apellido, edad, puesto, seniority, salario})
        .then(response => {
            console.log(response);
            setNew(false);
            setCreated(true);
        })
        .catch(error => console.log(error))
    }
    
    return(
        <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[90vh] w-4/5 rounded-lg border border-gray-950 shadow-lg flex flex-col bg-oscuro max-sm:h-[100vh] max-sm:w-full">
            <div className="w-full flex justify-center items-center mt-10">
                <h1 className="text-blancoLetra font-semibold text-5xl">Crear</h1>
            </div>
            <form className="flex flex-col gap-2 mt-10 w-full items-center" onSubmit={handleSubmit}>
                <span className="text-blancoLetra font-semibold">Nombre:</span>
                <InputText
                setText={setNombre}
                text={nombre}
                />
                <span className="text-blancoLetra font-semibold">Apellido:</span>
                <InputText
                setText={setApellido}
                text={apellido}
                />
                <span className="text-blancoLetra font-semibold">Edad:</span>
                <InputNumber
                setNumber={setEdad}
                number={edad}
                />
                <span className="text-blancoLetra font-semibold">Puesto:</span>
                <InputOrdenar
                data={{info: puestos}}
                selected={setPuesto}
                theme={"Puesto"}
                />
                <span className="text-blancoLetra font-semibold">Seniority:</span>
                <InputOrdenar
                data={{info: Seniority}}
                selected={setSeniority}
                theme={"Seniority"}
                />
                <span className="text-blancoLetra font-semibold">Salario:</span>
                <InputNumber
                setNumber={setSalario}
                number={salario}
                />

                <div className="flex justify-between w-3/4 mt-5">
                    <button 
                    className="bg-redButton text-white font-semibold px-5 py-2 rounded-lg" 
                    onClick={(e) => {setNew(false); e.preventDefault()}}
                    >
                        Cancelar
                    </button>
                    <button 
                    className="bg-greenButton text-white font-semibold px-5 py-2 rounded-lg" 
                    type="submit"
                    >
                        Crear
                    </button>
                </div>
                
            </form>
        </section>
    )
}