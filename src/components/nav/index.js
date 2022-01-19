import './index.css'


function navBar(props){
    return(
        <nav className='navbar'>
            <ul className='navbaritem'>{props.children}</ul>
        </nav>
    )
}
export default navBar;