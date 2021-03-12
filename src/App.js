import logo from "./assets/logos/clio-logo.svg";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="Clio">
      <h1>This is from Clio</h1>
      <Header logo={logo}/>
    </div>
  );
}

export default App;
