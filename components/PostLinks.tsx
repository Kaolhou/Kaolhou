import Link from 'next/link'
import isLessThan10 from '../utils/isLessThan10'

interface GetPostQueryItem{
    i:{
        id:string;
        title:string;
        updatedAt:string;
    }
    index:number;
}
export default function PostsLinks({i,index}:GetPostQueryItem){
    let date = new Date(i.updatedAt)
    let day = isLessThan10(date.getDay())
    let month = isLessThan10(date.getMonth())

    return(
        <li className='block pl-10 text-xl py-1' key={index}>
            <span>
                {`${day}/${month}/${date.getFullYear()} - `}
            </span>
            <Link href={`/posts/${i.id}`} className="hover:text-pallete-1 transition-colors underline underline-offset-4 " >
                    {i.title}
            </Link>
        </li>
    )
}