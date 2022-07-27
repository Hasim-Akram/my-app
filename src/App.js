import logo from './logo.svg';
import './App.css';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>This is react app</p>
      
       <Person name="masum" year="1995"></Person>

      </header>
      


    </div>
  );
}
  
function Person(props) {
  return( 
    <div className='something' style={{border:'2px solid green'}}>
    <h1>Name:{props.name}</h1>
    <h1>Year:{props.year}</h1>
    
    </div>
 

    
  );
}

  

export default App;







