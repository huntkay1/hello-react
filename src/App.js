import plants from './plants.jpg';
import './App.css';

function PlantPic() {
  return <img style={{width: 800, height: 400}}src={plants} alt="houseplants" />;
}

function Heading() {
  return <h1>Houseplants</h1>
}

function PlantQuestion() {
  return(
    <div>
      <p>What is your favorite houseplant?</p>
      <textarea></textarea>
      <button>Submit</button>
    </div>
  );
}

const Plants = [
  {id: 1, Scientific: 'Monstera Deliciosa', Common: '(Swiss Cheese Plant)', Type: ' - Climbing Evergreen', Beginner: true},
  {id: 2, Scientific: 'Tradescantia Nanouk', Common: '(Fantasy Venice)', Type: ' - Spiderwort', Beginner: true },
  {id: 3, Scientific: 'Alocasia Amazonica', Common: '(Amazonian Elephants Ear)', Type: ' - Perennial Flowering', Beginner: false},
  {id: 4, Scientific: 'Epipremnum aureum', Common: '(Golden Pothos)', Type: ' - Vine', Beginner: true},
  {id: 5, Scientific: 'Calathea Ornata', Common: '(Pinstripe Plant)', Type: ' - Herbaceous Perennial', Beginner: false}

]

function PlantsList() {
  <h2>Types of Plants</h2>
  const listPlants = Plants.map(plant =>
    <li 
      key={plant.id}
      style={{
        color: plant.Beginner ? 'green' : 'red'
      }}
    >
      {plant.Scientific}
      {plant.Common}
      {plant.Type}
    </li>
  );
  return(
    <ul>{listPlants}</ul>
  )
}



function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="Heading">
          <Heading />
        </div>

        <PlantPic />
        <PlantQuestion />
        <PlantsList />
      </header>

    </div>
  );
}

export default App;
