import { useParams } from "react-router-dom";
import { NFT__DATA } from "../assets/data/data";
import Hero from '../components/Hero'
import LiveActions from '../sections/LiveActions'




const NftDetails = () => {

    const {id} = useParams()



    const singleItem = NFT__DATA.find((item) => item.id === id)


    const {title,desc,imgUrl,creator,creatorImg} = singleItem




    return (
        <>
        <Hero title={title}/>
        <section className="details-item">
        <img src={imgUrl} alt="item-img" className="item-img"/>
        <div className="info">
            <h1>{title}</h1>
            <div className="fans">
                <div className="actions">
                <i className="fa-regular fa-heart"><span>25 k</span></i>
                <i className="fa-regular fa-eye"><span>30 k</span></i>
                </div>
                <div className="options">
                <i className="fa-solid fa-ellipsis-vertical"></i>
                <i className="fa-regular fa-paper-plane"></i>
                </div>
            </div>
            <div className="creator">
                <img src={creatorImg} alt="creator-img" />
                <div className="creator-info">
                    <span>Created By</span>
                    <h4>{creator}</h4>
                </div>
            </div>
            <div className="desc">
                <p>{desc}</p>
            </div>
            <button className="btn"><i className="fa-solid fa-bag-shopping"></i> place a Bid</button>
        </div>
        </section>
        <LiveActions/>
        </>
    )

}



export default NftDetails;