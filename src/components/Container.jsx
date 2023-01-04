import { Link } from "./Link"
import { Avatar } from "./Avatar"
import { Icon } from "./Icon"

const links = [
    {link:'https://www.instagram.com/al.wng/', title:'Instagram'},
    {link:'https://github.com/alanwengrze', title:'Github'},
    {link:'https://www.linkedin.com/in/alanwengrze/', title:'LinkedIn'},
    {link:'https://twitter.com/alnwngg', title:'Twitter'},
  ]  

const avatar = {
    img: 'https://avatars.githubusercontent.com/u/106714756?v=4',
    nome:'alanwengrze'
}

export function Container(){
    return(
        <div className="h-screen w-80 flex flex-col gap-7 m-auto pt-14 items-center">
            <Avatar img={avatar.img} nome={avatar.nome}/>
            <Link link={links[0].link} title={links[0].title}/>
            <Link link={links[1].link} title={links[1].title}/>
            <Link link={links[2].link} title={links[2].title}/>
            <Link link={links[3].link} title={links[3].title}/>
            <Icon />
        </div>
    )
}