

import { NFT__DATA } from "../assets/data/data";
import NftCard from "../components/NftCard";


const LiveActions = () => {


    return (
        <section className="live-actions">
            <h3 className="section-name">Live Actions</h3>
            <div className="boxes">
                {
                    NFT__DATA.slice(0,4).map((item) => {
                        return (
                            <NftCard key={item.id} item={item}/>
                        )
                    })
                }
            </div>
        </section>
    )

}



export default LiveActions;