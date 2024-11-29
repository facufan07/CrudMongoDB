interface Props {
    text: string,
    setText: (text: string) => void
}

export default function InputText({text, setText}:Props) {
    return (
        <input 
        className="bg-oscuroClaro placeholder:text-oscuroLetra text-blancoLetra rounded-lg px-2 py-1 outline-none" 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        /> 
    )
}