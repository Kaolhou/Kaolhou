import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import Delete from './pages/Delete'
import Edit from './pages/Edit'

export default function Router(){
    return(
        <Routes>
            <Route path='/' element={<Add/>} />
            <Route path='/add' element={<Add/>} />
            <Route path='/edit' element={<Edit/>} />
            <Route path='/delete' element={<Delete />} />
        </Routes>
    )
}