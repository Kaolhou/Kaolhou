import Link from "next/link"

interface navbarProps{
    children: JSX.Element|JSX.Element[]
}
interface itemNavbarPropos{
    path:string;
    icon:string;
}
export function NavBar(props:navbarProps){
    return(
        <nav className='bg-pallete-4'>
            <ul className='flex justify-center'>{props.children}</ul>
        </nav>
    )
}
export function Item(props:itemNavbarPropos){
    return(
        <a href={props.path} className='p-3 hover:bg-pallete-1 transition-colors uppercase select-nonene'>
            <li className='nav-item' style={{fontWeight: 'bold'}}>
                {props.icon}
            </li>
        </a>
    )
}