import React, { useState } from "react";
import "./App.css";
import { AllFoods } from "./Data/Data";
import Card from "./componentes/Card/Card";
import Buttons from "./componentes/Buttons/Buttons";

function App() {
  const [food, setFood] = useState(AllFoods);
  const menuItems = AllFoods.map((test) => test.category);

  return (
    <div className="App">
      <div>
        <h1>Aplicatido - Filtro de comida</h1>
        <Buttons menuItems={menuItems}/>
        <Card food={food}/>
      </div>
    </div>
  );
}

export default App;
