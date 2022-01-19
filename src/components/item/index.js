/* eslint-disable jsx-a11y/anchor-is-valid */
import './index.css'

function item(props){
    return(
        <li className='nav-item'>
            <a href='#' className='icon-button'>
                {props.icon}
            </a>
        </li>
    )
}
export default item