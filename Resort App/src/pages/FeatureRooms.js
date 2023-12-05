import { useContext } from "react";
import Title from "../components/Title"
import { RoomContext } from "../Context";
import Loading from "../components/Loading";
import Room from "../components/Room";





const FeatureRoom = () => {
    const contextType = useContext(RoomContext)

    const {featuredRooms,loading} = contextType



const  rooms = featuredRooms.map(room => {
    return (
        <Room key={room.id} room={room}/>
    )
})
    return (

        <section className="featured-rooms">
        <Title title='Featured Rooms'/>
        <div className="featured-rooms-center">

            {loading ?  <Loading/> : rooms }
        </div>
        </section>
        
    )


}




export default FeatureRoom;