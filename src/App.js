import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <BrowserRouter>
      <NavLink route to="/"> Greeting</NavLink>
      <Routes>
        <Route exact path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
