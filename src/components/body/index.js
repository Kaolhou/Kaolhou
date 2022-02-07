import './index.css'
function Langs(props){
    return(
        <div className="card-conteiner">
            {props.children}
        </div>
    )
}

function LangItem(props){
    return(
        <div className="card">
            <div className="imgBox">
                <img src={props.url} alt="aoba" className="person"/>
            </div>
            <div className="card-content">
                <h2>{props.lang}</h2>
                <p>{props.level}</p>
            </div>
        </div>
    )
}
export {LangItem, Langs}