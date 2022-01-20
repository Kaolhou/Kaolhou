import './App.css';
import NavBar from './components/nav/index'
//import Item from './components/item/index'
import Routes from './routes'
import { BrowserRouter as Router, Link} from 'react-router-dom';

function Item(props){
    return(
        <Link to={props.path} className='icon-button'>
            <li className='nav-item'>
                {props.icon}
            </li>
        </Link>
    )
}

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar>
          <Item icon="Home" path="/"/>
          <Item icon="Projetos" path="/projects" />
          <Item icon="Sobre" path="/about" />
        </NavBar>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
