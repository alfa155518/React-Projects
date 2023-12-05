




export default function Product({product}) {


let result = product.map((pr,index) => <div key={index} className="product">
    <h2>{pr.label}</h2>
    <p>{pr.ingredientLines}</p>
    <span>{pr.totalWeight}</span>
    <img src={pr.image} alt=""/>
</div>)



    return (
        <>
        {result}
        </>
    )


}