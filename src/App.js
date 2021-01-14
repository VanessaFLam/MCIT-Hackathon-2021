import './App.css';
import React from "react"
import SearchJobs from "./SearchJobs"

class App extends React.Component {
    render() {
      return (
        <div className="container">
          <h1> MCIT Job Post</h1>
          <SearchJobs />
        </div>
      )
    }
  }

export default App;
