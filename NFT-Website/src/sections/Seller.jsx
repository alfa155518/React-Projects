
import { SELLER__DATA } from "../assets/data/data";


const Seller = () => {



    return (
        <section className="top-seller">
            <h3 className="section-name">Top Seller</h3>
            <div className="sellers">
                {
                    SELLER__DATA.map((seller,index) => {
                        return (
                            <div className="seller-card" key={index}>
                                <img src={seller.sellerImg} alt="Seller Img" />
                                <div className="info">
                                    <span className="name">{seller.sellerName}</span>
                                    <span>{seller.currentBid} ETH</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )

}




export default Seller;