import { PropsAllFoods } from "../../Data/Data"

interface PropsButtons {
    menuItems: PropsAllFoods[]; 
}


export default function Buttons({ menuItems }: PropsButtons) {
    
  return (
    <div>
      {menuItems.map(test => (
        <button key={test.id}>
            {test.category}
        </button>
      ))}
    </div>
  );
}
