import './App.css';

//components
import FirstComponent from './components/FisrtComponent';
import MyComponent from './components/MyComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
        <FirstComponent/>
        <TemplateExpressions/>
        <MyComponent/>
        <Events/>
    </div>
  );
}

export default App;
