import './App.css';
import NavBar from './components/nav/index'
import Item from './components/item/index'
import Main from './components/body/index'

function App() {
  return (
    <div className="App">
      <NavBar>
        <Item icon="Home" path="/"/>
        <Item icon="Projetos" path="/projects" />
        <Item icon="Sobre" path="about" />
      </NavBar>
      <Main/>
    </div>
  );
}

export default App;
