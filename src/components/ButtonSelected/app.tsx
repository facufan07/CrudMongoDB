import { useState } from "react";

interface Props {
    text: string
    setText: (text: string[]) => void
    textArray: string[]
}
export default function ButtonSelected({text, setText, textArray}:Props) {
    const [color, setColor] = useState("");
    return(
        <button 
        className={`text-blancoLetra ${color} font-semibold hover:bg-oscuroClaro transition-all duration-150  px-2 py-2 rounded-lg mb-2 border border-oscuroClaro`} 
        onClick={() => {
            if (color === "bg-oscuroClaro") {
                setColor("");
                setText(textArray.filter((item) => item !== text));
            }else{
                setColor("bg-oscuroClaro");
                setText([...textArray, text]);
            }
        }}
        >
            {text}
        </button>
    )
}