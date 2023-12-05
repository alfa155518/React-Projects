import { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { Link } from "react-router-dom";





const NftCard = ({item}) => {


    const {id,imgUrl,title,creatorImg,currentBid,creator} = item

    let [modal,setModal] = useState(false)


    const showModal =(e) => {
        e.preventDefault();
        setModal(true)
    }

    return (
        <>
        {
            modal ? 
            <ModalWrapper setModal={setModal}/>: null
        }
        <div className="box">
        <img src={imgUrl} alt="item-img" className="img-box" />
        <div className="details">
            <h4><Link to={id}>{title}</Link></h4>
            <div className="info">
                <div className="creator">
                    <img src={creatorImg} alt="creator-img" />
                    <div>
                    <strong>Created By</strong>
                    <span>{creator}</span>
                    </div>
                </div>
                <div className="creator-info">
                    <strong>Current Bid</strong>
                    <span>{currentBid} ETH</span>
                </div>
            </div>
                    <form>
                        <button className="btn" onClick={(e) => showModal(e)}><i className="fa-solid fa-bag-shopping"></i> Put a Bid</button>
                        <button className="btn">View History</button>
                    </form>
        </div>
    </div>
        </>
    )

}



export default NftCard;