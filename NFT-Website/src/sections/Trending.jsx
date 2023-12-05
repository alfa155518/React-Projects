





import { NFT__DATA } from "../assets/data/data";
import NftCard from "../components/NftCard";


const Trending = () => {


    return (
        <section className="trending">
            <h3 className="section-name">Trending</h3>
            <div className="boxes">
                {
                    NFT__DATA.map((item) => {
                        return (
                            <NftCard key={item.id} item={item}/>
                        )
                    })
                }
            </div>
        </section>
    )

}



export default Trending;