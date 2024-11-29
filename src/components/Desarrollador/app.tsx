interface Props {
    nombre: string,
    apellido: string,
    edad: number,
    puesto: string,
    seniority: string,
    salario: number
    _id: string
    onClick: () => void
    selectedId: string
}

export default function Desarrollador({nombre, apellido, edad, puesto, seniority, salario, _id, onClick, selectedId}:Props) {
    const isSelected = selectedId === _id
    return(
        <>
        <div 
        className={`grid grid-cols-6 max-sm:grid-cols-3 gap-4 text-center ${isSelected ? "bg-oscuroClaro" : ""} mb-4 relative hover:bg-oscuroClaro transition-all duration-150 py-2 px-2 cursor-pointer rounded-lg border border-oscuroClaro`}
        onClick={onClick}
        >
            <span className="text-blancoLetra font-semibold text-sm">{nombre}</span>
            <span className="text-blancoLetra font-semibold text-sm">{apellido}</span>
            <span className="text-blancoLetra font-semibold text-sm">{edad}</span>
            <span className="text-blancoLetra font-semibold text-sm">{puesto}</span>
            <span className="text-blancoLetra font-semibold text-sm">{seniority}</span>
            <span className="text-blancoLetra font-semibold text-sm">{salario}</span>
            <div className="absolute right-[-170px] top-1/2 transform -translate-y-1/2">
                
            </div>
        </div>
        
        </>
    )
}