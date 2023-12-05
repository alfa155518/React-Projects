import Hero from "../components/Hero";
import { NFT__DATA } from "../assets/data/data";
import NftCard from "../components/NftCard";



const Create = () => {
    
    
    return (
        <>
        <Hero title={'Create Item'}/>
        <section className="create-item">
        {
            NFT__DATA.slice(0,1).map((item) => {
                return (
                    <div key={item.id} className="preview">
                    <h3 className="section-name">Preview Item</h3>
                    <NftCard item={item}/>
                    </div>
                    )
                })
            }
            
        <form className="inputs-item">
            <label htmlFor="img">Upload File</label>
            <input type="file" id="img" placeholder="Drop Your Image"/>
            
            <label htmlFor="price">Price</label>
            <input type="number"  id='price' placeholder="Enter Price For One Item (ETH)"/>

            <label htmlFor="bid">Minium Bid</label>
            <input type="number" id='bid'  placeholder="Enter Minium bid"/>

            <div className="inputs-data">
            <label htmlFor="start">Starting Data</label>
            <input type="date" id='start' />

            <label htmlFor="expiration">Expiration Data</label>
            <input type="date" id="expiration" />
            </div>

            <label htmlFor="title">Title</label>
            <input type="text" id='title' placeholder="Enter Title"/>

            <label htmlFor="description">Description</label>
            <textarea  id="description" wid></textarea>

        </form>
        </section>
        </>
    )

}



export default Create;