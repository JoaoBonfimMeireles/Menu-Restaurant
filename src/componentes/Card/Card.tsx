import { PropsAllFoods } from "../../Data/Data"

interface PropsFood {
    food: PropsAllFoods[];
}

function Card({food}: PropsFood) {
    return(
        <div>
            <div>
                {food.map((test) => (
                    <div key={test.id}>
                        <div>
                            <img src={test.img} alt={test.title} />
                        </div>
                        <div>
                            <div>
                                {test.title} -- {test.price}
                            </div>
                            <div>
                                {test.description}
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