interface Props {
    number: number,
    setNumber: (number: number) => void
}

export default function InputNumber({number, setNumber}:Props) {
    return (
        <input 
        className="bg-oscuroClaro placeholder:text-oscuroLetra text-blancoLetra rounded-lg px-2 py-1 outline-none" 
        type="number" 
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        /> 
    )
}