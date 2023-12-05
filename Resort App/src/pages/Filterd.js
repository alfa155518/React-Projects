
import Room from "../components/Room";



const Filtered = () => {
    let res;
    let filteredItem = JSON.parse(localStorage.getItem('filter'))
    if (localStorage.getItem('filter')) {
        res = filteredItem.map(item => {
            return (
                <Room key={item.id} room={item}/>
                )
                
        })
    } else {
        return false
    }
    return (
        <div className="single-room-images">
            {res}
        </div>
    )

}



export default Filtered;