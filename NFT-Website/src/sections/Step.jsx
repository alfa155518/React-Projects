





const Step = () => {

    const stepCards = [
        {
            cardIcon:<i className="fa-solid fa-wallet"></i>,
            cardName:'Step Your Wallet',
            cardDetails:<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum vero iste nisi deleniti. Maiores, at!</p>
        },
        {
            cardIcon:<i className="fa-solid fa-table-list"></i>,
            cardName:'Create Your Collections',
            cardDetails:<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum vero iste nisi deleniti. Maiores, at!</p>
        },
        {
            cardIcon:<i className="fa-regular fa-image"></i>,
            cardName:'Add Yor Nfts',
            cardDetails:<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum vero iste nisi deleniti. Maiores, at!</p>
        },
        {
            cardIcon:<i className="fa-solid fa-list"></i>,
            cardName:'List Item For Sale',
            cardDetails:<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum vero iste nisi deleniti. Maiores, at!</p>
        },
    ]

    return (
        <section className="step">
            <h3 className="section-name">Create And Sell Yor Nfts</h3>
            <div className="cards">
            {
                stepCards.map((card,index) => {
                    return (
                        <div className="card" key={index}>
                            <div className="icon">
                                {card.cardIcon}
                            </div>
                            <h4>{card.cardName}</h4>
                            <div className="details">
                                {card.cardDetails}
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )

}


export default Step;