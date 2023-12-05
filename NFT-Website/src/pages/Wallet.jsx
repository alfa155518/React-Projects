import Footer from "../components/Footer";
import Hero from "../components/Hero";


















const Wallet = () => {


    return (
        <>
        <Hero/>
        <section className="wallet">
            <div className="wallet-head">
        <h1>Drop A Message</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus accusamus dolor adipisci? Asperiores, suscipit dolor culpa accusantium eius voluptas?</p>
            </div>
            <div className="boxes-wallet">
                <div className="box">
                <i className="fa-brands fa-bitcoin"></i>
                <h2>Bitcoin</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ab architecto ad debitis, alias dicta!</p>
                </div>
                <div className="box">
                <i className="fa-solid fa-coins"></i>
                <h2>Coinbase</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ab architecto ad debitis, alias dicta!</p>
                </div>
                <div className="box">
                <i className="fa-brands fa-viacoin"></i>
                <h2>Via Coin</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ab architecto ad debitis, alias dicta!</p>
                </div>
                <div className="box">
                <i className="fa-solid fa-litecoin-sign"></i>
                <h2>Lite Coin</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ab architecto ad debitis, alias dicta!</p>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )

}



export default Wallet;