import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const singer1 = {
    name: "Minar Rahman",
    song: "Karone Okarone"
  };
  const singer2 = {
    name: "Niti Mohan",
    song: "Isq Wala Love" 
  };
  const reviewSong = [
    {song: "Kon Abege", comment: "consequuntur numquam. Maiores at iure illo saepe delectus placeat"},
    {song: "Dheeme Dheeme", comment: " deserunt sapiente cum qui, temporibus quisquam sunt nam"},
    {song: "RockStar", comment: "numquam aut, nobis beatae ullam quis magnam corrupti reicie"},
    {song: "khunsuti", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {song: "Karone Okarone", comment: "Temporibus accusamus ea unde. Veniam, cumque a."}
  ]
  const products = [
    {name: "Photoshop", price: "$89.99"},
    {name: "Illustrator", price: "$34.89"},
    {name: "Acrobate", price: "$5.56"},
    {name: "premier", price: "$234.89"},
    {name: "AutoCad", price: "$45.78"}
  ]
  const singerStyle = {
    border: "2px solid yellow",
    borderRadius: "10px",
    margin: "15px",
    padding: "7px",
    backgroundColor: "lightcyan",
    color: "grey"
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Fun with React..</h1>
        <h2>Favorite Singer</h2>
        <Counter></Counter>
        <h4 style={singerStyle}>Singer: {singer1.name}
        <br/>
        Song: {singer1.song}</h4>
        <h4 style={singerStyle}>Singer: {singer2.name}
        <br/>
        Song: {singer2.song}</h4>
        <ul>
          {
          reviewSong.map(name => <li>{name.song}</li>)
          }
        </ul>
        {
          reviewSong.map(nm => <Song name={nm}></Song>)
        }
        {
          products.map(pd => <Product product={pd}></Product>)
        }
      </header>
    </div>
  );
}
function Song(props) {
  const songStyle = {
    border: "10px",
    borderRadius: "10px",
    margin: "15px",
    padding: "15px",
    backgroundColor: "lightsalmon",
    width: "70%",
    color: "grey"
  }
  const { song, comment } = props.name;
  return (
      <div style={songStyle}>
        <h3>Song <span style={{color: "cyan"}}>:</span>{song}</h3>
        <p>Comment <strong style={{color: "cyan"}}>:</strong>{comment}</p>
      </div>
  )
}
function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "10px",
    backgroundColor: "lightgray",
    width: "250px",
    height: "265px",
    color: "black"
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <button style={{backgroundColor: "blue", border: "none", padding: "8px", fontSize: "15px"}}>Buy now</button>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(6);
  // const handleIncrease = () => {
  //   setCount(count + 1);
  // }
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    )
}

export default App;
