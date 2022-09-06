import './App.css';
import FormCard from './components/FormCard';
import BaseConverter from './utility/BaseConverter';

function App() {
  console.log(BaseConverter(16, 'CA0', 10));
  return (
    <div className="App">
      <header className="App-header">
        <FormCard />
      </header>
    </div>
  );
}

export default App;
