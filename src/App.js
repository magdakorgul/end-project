
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Lisbon"/>
      
    </div>
    <footer>This project was coded by Magdalena Korgul and is 
      <a href='https://github.com/magdakorgul/end-project' target='_blank'> open-sourced on GitHub</a>
    </footer>
    </div>
  );
}

export default App;
