import Room from "./Room"






const RoomsList = ({rooms}) => {


    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>Unfortunately No Rooms Matched Your Search Parament</h3>
            </div>
        )
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
        {
            rooms.map((item) => {
                return (
                    <Room key={item.id} room={item}/>
                )
            })
        }
            </div>
        </section>
    )

}



export default RoomsList;