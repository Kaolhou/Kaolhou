import {
    Routes,
    Route
} from 'react-router-dom'
import Home from './components/body/index'
import About from './pages/about/index'
import Projects from './pages/projects/index'


function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path='*' element={<h1>Error 404</h1>} />
        </Routes>
    )
}
export default MainRoutes