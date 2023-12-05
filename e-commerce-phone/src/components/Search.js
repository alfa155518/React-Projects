


export default function Search() {
    let result = JSON.parse(localStorage.getItem("search"))

    // const {img,title,price} = result

     let end = result.map(re => {
        return (
            <div className="product" key={re.id}>
            <img alt="img" src={re.img}/>
            <span className="title">{re.title}</span>
            <span className="price">${re.price}</span>
            
        </div>
        )
     })

    return (
        <div className="all-products">
            {end}
            
        </div>
    )
}