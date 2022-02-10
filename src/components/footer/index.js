import {useState,useEffect} from 'react'
import './index.css'

function Footer(){
    const [dat, setDat]=useState('')
    useEffect(()=>{
        async function exe(){
            fetch('https://api.github.com/repos/Kaolhou/kaolhou.dev').then((prom)=>{
                prom.json().then(data=>{
                    console.log(data)
                    setDat(data.updated_at)
                })
            })
        }
        exe()
    },[])
    return(
        <footer>
            <p>Feito com ❤ por André Mendes</p>
            <p>Updated At: {dat}</p>
        </footer>
    )
}
export default Footer