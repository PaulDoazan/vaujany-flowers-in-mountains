import flowers from '../assets/flowers.json'
import FlowerSlot from './FlowerSlot'
import FlowerToken from './FlowerToken'

export default function FlowerTokens() {
    return (
        <div>
            {flowers.map((el, index) => {
                return <FlowerSlot key={el.id} value={el} index={index} />
            })}
            {flowers.map((el, index) => {
                return <FlowerToken key={el.id} value={el} index={index} />
            })}
        </div>
    )
}
