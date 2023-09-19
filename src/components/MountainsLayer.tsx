import imgMountains from '../assets/mountains-bg.jpg'
import FlowerTokens from './FlowerTokens'

export default function MountainsLayer() {
    return (
        <div className="col-start-2 col-end-12 row-start-1 row-end-9 relative">
            <div className="droparea mt-8">
                <img className="h-full object-contain object-left select-none" src={imgMountains} alt="" />
                <FlowerTokens />
            </div>
        </div>
    )
}
