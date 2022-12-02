import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavLink route to='/'> Home</NavLink>
      <NavLink route to='/greeting'>Greeting</NavLink>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/greeting' element={<Greeting />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
