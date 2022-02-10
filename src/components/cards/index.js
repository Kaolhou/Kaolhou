import './index.css'
function BoxContainer(props){
    return(
        <div className="card-conteiner">
            {props.children}
        </div>
    )
}

function ItemConteiner(props){
    return(
        <div className="card">
            <div className="imgBox">
                <img src={props.url} alt="aoba" className="person"/>
            </div>
            <div className="card-content">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
        </div>
    )
}
export {BoxContainer, ItemConteiner}