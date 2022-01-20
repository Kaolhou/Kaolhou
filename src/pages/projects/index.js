import { useEffect, useState} from 'react'
import './index.css'
import load from '../../media/load.gif'

function Projects(){
    const [me, setMe] = useState({})
    useEffect(()=>{
        fetch('https://api.github.com/users/kaolhou').then((prom)=>{
            prom.json().then((data)=>{
                setMe(data)
                console.log(data)
            })
        })
    },[])
    return(
        <div className='proj-conteiner'>
            <div className='myImg'>
                <img className='img' src={me.avatar_url} alt="avatar" />
            </div>
            <div className="mid">
                <div className="nam-char">
                    <p id="name">{me.name}</p>
                    <p id="login">{me.login}</p>
                </div>
                <div className='feat'>
                
                </div>
                <div className='bio'>
                
                </div>
            </div>



            {typeof me.avatar_url === 'string' || <div className='loading'>
                <img src={load} alt="profile" />
            </div>}
        </div>
    )
}
export default Projects