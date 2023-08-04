import logo from './logo.svg';
import './App.css';
import RecipeDescription from './components/Description';
import RecipeIngredients from './components/Ingredients';

function App() {
  return (
    <div className="App">

      <div>
          <RecipeDescription />
          <RecipeIngredients />
      </div>
    </div>
  );
}

export default App;
