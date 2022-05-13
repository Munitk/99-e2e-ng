import logo from './logo.svg';
import nature from './image/nature.jpg';
import Contact from './contact';
import './App.css';
import Address from './address';
import Comment from './comment';
function App() {
  let myTitle = "Welcome to react js learning camp";
  return (
    <p>
      <header>
        <img src={nature} alt="image not found" width="100%" height="300" ></img>
        {/* this is calling of function component of react js  */}
        {/* <Address></Address> */}
       
      </header>
      <Contact></Contact>
      <div className="thbs">
        <h2>{myTitle}</h2>
        {/* <Contact></Contact> */}
      </div>
      <Address time="ONLY WED"></Address>
      <Comment text="I am class comp" date="13th May 2022"></Comment>
    </p>
  );
}

export default App;