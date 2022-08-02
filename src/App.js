import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useSyncExternalStore } from 'react';

function App() {

  //data load by api 3 step 
  //01. userEffet
  //02. state declare 
  //03. then use map to get data

  let [users, setUser] = useState([]);

  useEffect(() => {
    //Runs only on the first render
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, []);

  //not array use map  

  const products = [
    { name: 'photoshop', price: '$400' },
    { name: 'Illastrator', price: '$800' },
    { name: 'apex', price: '$600' }
  ]

  const lists = [
    { id: '01', user: 'admin' },
    { id: '02', user: 'Je' },
    { id: '03', user: 'agm' }
  ]
  return (
    <div className="App">
      <header className="App-header">

        <h2>this is main components</h2>
        <Mycontent></Mycontent>
        <Mycontent></Mycontent>
        {/* the way 1 one work at a time */}
        {/* <Product name={products[0].name} price={products[0].price} ></Product>
        <Product name={products[1].name} price={products[1].price} ></Product> */}
        <Product product={products[2]}></Product>

        <MovieCounter></MovieCounter>

        {
          lists.map(valuehere => <Mapreturn name={valuehere.user} age={valuehere.id}></Mapreturn>)
        }


        <Useapi users={users}></Useapi>
      </header>
    </div >
  );
}

function Mycontent() {

  // const personStyle = {
  //   border: '2px solid green',
  //   margin: '2px'
  // }

  return (
    <div style={{ border: '2px solid green', margin: '2px' }} >
      <h1>This a personal components</h1>
      <h2>componetnst two</h2>
    </div>
  );
}

function MovieActed(props) {
  return (
    <h3>Movies I have acted :{props.totalmovies}</h3>
  );
}

function Product(props) {
  const ProductStyle = {
    border: '2px solid red',
    borderRadious: '5px',

    height: 'auto',
    width: '400px',
    margin: '3px'
  }
  const { name, price } = props.product;

  // const lsititem = list.map(lists => lists);
  return (
    <div style={ProductStyle}>
      <h2>Name:{props.name}</h2>
      <h1>Price: {props.price}</h1>
      <h2>Name:{name}</h2>
      <h1>Price: {price}</h1>
      <button className='btn btn-submit'>Buy Now</button>
    </div>

  );
}


function MovieCounter() {
  const [count, setCount] = useState(0);
  // console.log(count, setCount);

  function HandleClick() {
    // console.log('some one click me');
    setCount(count + 1)
  }
  return (
    <div>
      <p>this add to useState Hook</p>
      <button onClick={HandleClick} >Add Movie</button>
      <h2>Number of Movies: {count} </h2>
      <MovieActed totalmovies={count}></MovieActed>
      <MovieActed totalmovies={count}></MovieActed>
      <MovieActed totalmovies={count + 10}></MovieActed>
    </div>
  );
}


function Mapreturn(props) {
  return (
    <div>
      <p>Return value By Using map function </p>
      <h1>Name :{props.name}</h1>
      <h3>Age: {props.age}</h3>
    </div>
  );
}


function Useapi(props) {

  return (
    <div>
      {/* //input data from api */}

      {
        props.users.map(user => <h1>Name :{user.name} <br></br> id={user.id} </h1>)


      }
      {/* {
        props.users.map(user => <h1>id:{user.id}</h1>)

      } */}


    </div>
  );
}






export default App;
