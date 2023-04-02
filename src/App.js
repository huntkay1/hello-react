import {useState} from 'react';
import {supabase} from './supabaseClient';
import './App.css';


// A React component that queries and displays data from Supabase
function Library() {
  // The useState hook lets us store data in a component across renders
  // setMyBooks is a setter function that updates the state of myBooks
  const [myBooks, setMyBooks] = useState([]);
  // This should look familar from Codepen
  async function getBooks() {
    let { data: Books, error } = await supabase
      .from('Books')
      .select('*')
    // Update the state
    setMyBooks(Books);
  }
  // Execute the function
  getBooks();
  // Below is what displays when you use <Library />
  return (
    <table className="bookTable">
    {
      myBooks.map(b => (
        <tr>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.description}</td>
          <td>{b.ISBN}</td>
        </tr>
      ))
    }
    </table>
  )
}


function PlantQuestion() {
  const [count, setCount] = useState(0);
  function Submit() {
    setCount(count + 1);
  }
  return(
    <div>
      <p>What is your favorite houseplant?</p>
      <textarea></textarea>
      <button onClick={Submit}>Submit {count}</button>
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
        <PlantQuestion />
        <PlantsList />
        <Library />
      </header>

    </div>
  );
}

export default App;
