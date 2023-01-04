export function Link({link, title}){
    return(
        <a href={link} target="_blank" className="w-full text-center p-2 rounded-md border m-2  hover:scale-90 duration-500">{title}</a>
    )
}