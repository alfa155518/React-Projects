import { RoomConsumer } from "../Context";
import Filtered from "../pages/Filterd";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";




const RoomsContainer = () => {


    return (
        <>
        <RoomConsumer>
            {
                (value) => {
                    const {loading,sortedRooms,rooms} = value;
                    console.log(value)
                    if(loading) {
                        return(<Loading/>)
                    }
                    return (
                        <div>
                        <RoomsFilter rooms={rooms}/>
                        <RoomsList rooms={sortedRooms}/>
                        </div>
                        )
                    }
                }
                </RoomConsumer>
        </>
    )

}



export default RoomsContainer;