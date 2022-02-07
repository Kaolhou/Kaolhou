import { useEffect, useState} from 'react'
import './index.css'
import load from '../../media/load.gif'

function Projects(){
    const [me, setMe] = useState({})
    const [repo, setRepo] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/kaolhou').then((prom)=>{
            prom.json().then((data)=>{
                setMe(data)
                console.log(data)
            })
        })
        fetch('https://api.github.com/users/Kaolhou/repos').then((prom)=>{
            prom.json().then((data)=>{
                console.log(data)
                setRepo(data)
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
                    <div className='bio'>
                        {me.bio}
                    </div>
                </div>
                <div className='feat'>
                    <p><strong>Seguidores:</strong> {me.followers}</p>
                    <p><strong>Seguindo:</strong> {me.following}</p>
                </div>
                
            </div>
            <div className='repos-container'>
                {repo.map((item,key)=>{
                    return(
                        <a href={item.html_url} key={key} className='repos-item'>
                            <div className='repos-name'>{item.name}</div>
                            <div className='repos-lang'>{item.language}</div>
                        </a>
                    )
                })}
            </div>


            {(typeof me.avatar_url === 'string' && me.avatar_url.length >= 10) || <div className='loading'>
                <img src={load} alt="profile" />
            </div>}
        </div>
    )
}
export default Projects