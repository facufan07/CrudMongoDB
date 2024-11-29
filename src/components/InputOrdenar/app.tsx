import { useState, useEffect } from "react";
import svg from "../../assets/Expand_down.svg";

interface Props {
    data: { info: string[] }; 
    selected: (info: string) => void; 
    theme: string
}

export default function InputOrdenar({data, selected, theme}:Props) {
    const [dropdown, setDropdown] = useState(false);
    const [option, setOption] = useState(theme);

    useEffect(() => {
        setOption(theme); 
    }, [theme]);
    
    return (
        <div className="relative">

        <div 
        className={`cursor-pointer hover:bg-oscuroClaro transition-all duration-100 border border-oscuroClaro px-4 py-2 flex justify-between items-center rounded-lg shadow-md`}
        onClick={() => setDropdown(!dropdown)}
        >
            <span className="text-blancoLetra">{option}</span>
            <img src={svg} alt="" />
        </div>

        {dropdown && (
            <div className="bg-backgroundFirstTime absolute w-full overflow-y-auto max-h-60 z-20">

            {data.info.map((option, key) => (
                <h1 
                className="cursor-pointer py-2 px-4 w-full border text-blancoLetra border-oscuroClaro bg-oscuro hover:bg-oscuroClaro transition-all duration-100 rounded-lg" 
                key={key}
                onClick={() => {
                    setOption(option);
                    setDropdown(false);
                    selected(option);
                }}
                >
                    {option}
                </h1>
            ))}

            </div>
        )}

        </div>
    );
}