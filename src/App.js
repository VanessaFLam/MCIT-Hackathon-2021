import './App.css';
import React from "react"
import SearchJobs from "./SearchJobs"

class App extends React.Component {
    render() {
      return (
        <div className="container">
          <header>
            <h3>University of Pennsylvania, MCIT Program</h3>
            <h1>Student Network</h1>
            <h4> <small>Made by Venessa and Shuke</small></h4>
           
          </header>
          
          <SearchJobs />
        </div>
      )
    }
  }

export default App;
