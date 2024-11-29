interface Props {dato: number}

export default function Coincidencias({dato}:Props) {
    return(
        <>
            <span className="text-blancoLetra font-semibold text-lg">Coincidencias encontradas: {dato}</span>
        </>
    )
}