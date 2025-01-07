import './App.css';
import CarDetails from './components/CarDetails';

function App() {

    const cars =  [
          {   
              "id":1, 
              "img":"polo.png",
              "marca":"Volkswagen", "carName":"Polo", 
              "price": 94290, 
          },
          {   
              "id":2, 
              "img":"civic-type-r.png",
              "marca":"Honda", "carName":"Civic Type R", 
              "price": 429900, 
          },
          {   
              "id":3, 
              "img":"onix-premier-at-turbo.png",
              "marca":"Chevrolet", "carName":"Onix Premier AT Turbo", 
              "price": 64900, 
          },
          {   
              "id":4, 
              "img":"pulse.png",
              "marca":"Fiat", "carName":"Pulse", 
              "price": 105990, 
          }
      ]

  return (
    <div className="App">
     <CarDetails cars={cars}/>
    </div>
  );
}

export default App;
