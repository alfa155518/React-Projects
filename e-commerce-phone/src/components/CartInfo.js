


export default function CartInfo() {
let productInfo = JSON.parse(localStorage.getItem('info'))

const {title,img,price,company} = productInfo

console.log(title,img,price,company)

    return (
        <>
        <div>
            {title}
            <img src={img} alt=""/>
            {price}
            {company}
        </div>
        </>
    )

}