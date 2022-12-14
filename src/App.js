import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import './estilos.css';
import {Routes, Route, BrowserRouter } from 'react-router-dom';



function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
          <Route path='/product/:id' element={<ItemDetailContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
