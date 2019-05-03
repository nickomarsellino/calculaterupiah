import React, { Component } from 'react';
import './App.css';

import RupiahForm from "./Rupiah_Form/Rupiah_Form";

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="bodyContainer col-6">
              <h1 id="appTitle">Calculation of Rupiah Fractions</h1>
              <p id="appDescription">
                  This application will calculate a number of rupiahs and show the minimum number of rupiah fractions needed to make that amount</p>

              <RupiahForm/>
          </div>
      </div>
    );
  }
}

export default App;
