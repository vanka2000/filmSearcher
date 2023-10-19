import './App.css';
import Library from '../pages/library';
import { Routes,Route,} from 'react-router-dom';
import Film from './Film/Film';

function App()  {


  return (
    <div>
        <Routes>
            <Route path='/library' element= {<Library/>}/> 
            <Route path='/library/:id' element={<Film/>}/>
        </Routes>
    </div>
  )
}

export default App;
