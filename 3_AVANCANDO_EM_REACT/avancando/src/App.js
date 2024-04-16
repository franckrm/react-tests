import ManageData from './components/ManageData';
import './App.css';

import  Civic from "./assets/civic.jpg"

function App() {
  return (
    <div className="App">
        <h1>Avançando em React</h1>
        {/*Imagem em public*/}
        <img src="./img1.jpg" alt="Paisagem"/>
        {/*Imagem em asset*/}
        <img src={Civic } alt="Cidade"/>
        <ManageData/>
    </div>
  );
}

export default App;
