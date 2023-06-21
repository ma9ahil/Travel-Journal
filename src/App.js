import React from "react"
import './App.css';
import Hero from "./components/Hero";
import data from "./data";


function App() {
  const cards =data.map(item=>{
    return (<Hero
    title={item.title}
    img={item.imageUrl}
    location={item.location}
    desc={item.description}
    sD={item.startDate}
    eD={item.endDate}
    lk={item.googleMapsUrl}

    />)
  })
  return (
    <div className="App">
     <nav className='navbar'>my travel journal
     <span className="material-symbols-outlined">
globe_asia
</span>
     </nav>
     <div className="cardtainer">
     <div>{cards}</div>
     </div>
    </div>
  );
}

export default App;
