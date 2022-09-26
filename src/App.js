import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
        fisrtName={ "Jane" } 
        lastName={ "Doe" }
        age={ "45" }
        hairColor={ "Black" }
      />
      <PersonCard
        fisrtName={ "Jhon" } 
        lastName={ "Smith" }
        age={ "88" }
        hairColor={ "Brown" }
      />
      <PersonCard
        fisrtName={ "Millard" } 
        lastName={ "Fillmore" }
        age={ "50" }
        hairColor={ "Brown" }
      />
      <PersonCard
        fisrtName={ "Maria" } 
        lastName={ "Smith" }
        age={ "62" }
        hairColor={ "Brown" }
      />
    </div>
  );
}

export default App;
