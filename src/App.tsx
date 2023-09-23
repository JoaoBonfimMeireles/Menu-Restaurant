import React, { useState } from "react";
import "./App.css";
import { AllFoods } from "./Data/Data";
import Card from "./componentes/Card/Card";

function App() {
  const [food, setFood] = useState(AllFoods);
  const categories = Array.from(new Set(AllFoods.map((item) => item.category)));

  const filterFoodByCategory = (category: string) => {
    const filteredFood = AllFoods.filter((item) => item.category === category);
    setFood(filteredFood);
  };

  return (
    <div className="App">
      {categories.map((category) => (
        <button key={category} onClick={() => filterFoodByCategory(category)}>
          {category}
        </button>
      ))}
      <button onClick={() => setFood(AllFoods)}>
        Todos os pratos
      </button>
      <div>
        <h1>Aplicativo - Filtro de Comida</h1>
        <Card food={food} />
      </div>
    </div>
  );
}

export default App;
