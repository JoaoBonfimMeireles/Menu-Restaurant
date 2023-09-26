import { PropsAllFoods } from "../../Data/Data"
import "./style.css"

interface PropsFood {
    food: PropsAllFoods[];
}

let RealPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

function Card({food}: PropsFood) {
    return(
        <div>
            <div  className="box-card">
                {food.map((test) => (
                    <div key={test.id} className="box-items">
                        <div>
                            <img src={test.img} alt={test.title} />
                        </div>
                        <div>
                            <div>
                                <span>{test.title}</span> -- <span>{RealPrice.format(test.price)}</span>
                            </div>
                            <div>
                                <p>{test.description}</p>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Card;