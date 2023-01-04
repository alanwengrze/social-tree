export function Avatar({img, nome}){
    return(
        <div>
            <img src={img} alt={`Imagem do ${nome}`} className="w-40 rounded-full"/>
            <h2 className="text-center mt-3">{nome}</h2>
        </div>
    )
}