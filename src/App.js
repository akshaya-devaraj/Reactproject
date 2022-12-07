

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FormEx from './Components/FormEx';
import HooksEx from './Components/HooksEx';
import ClickCounter from './Hoc/ClickCounter';
import HoverCounter from './Hoc/HoverCounter';
import Aboutus from './Project/Aboutus';
import Contactus from './Project/contactus';
import Home from './Project/Home';
import ButtonAppBar from './Project/navBarDemo';


function App() {
  return (
    <div className="App">
  <FormEx/>
</div>
  );
}

export default App;
