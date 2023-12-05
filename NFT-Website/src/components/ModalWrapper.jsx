



const ModalWrapper = ({setModal}) => {



    const directions = [
        {
            title:'You Must Bid At Least',
            amount: '5.89 ETH'
        },
        {
            title:'Service Free',
            amount: '0.89 ETH'
        },
        {
            title:'Total Bid Amount',
            amount: '5.89 ETH'
        },
    ]

    const removeModal = () => {

        setModal(false)

    }

    return (
        <div className="modal-wrapper">
            <div className="close" onClick={() => removeModal()}>
            <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="heading-modal">
            <h2>Place A Bid</h2>
            <p>You Must Bid At Least  <span>5.89 ETH</span></p>
            </div>
            <form>
            <input type="number" placeholder="00: 00 ETH"/>
            <h4> Enter Quantity, 7 available</h4>
            <input type="number" placeholder="Enter Quantity"/>
            </form>
            <div className="directions">
                {
                    directions.map((item,index) => {
                        return (
                        <div key={index} className="item">
                            <p>{item.title}</p>
                            <h5>{item.amount}</h5>
                        </div>
                        )
                    })
                }
            </div>
            <span className="btn">Place A Bid</span>
        </div>
    )

}


export default ModalWrapper;

