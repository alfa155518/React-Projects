import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";
import { Link } from "react-router-dom";



const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}

const RoomsFilter = ({rooms}) => {
    const contextType = useContext(RoomContext)
    
    const {HandelChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breackfast,pets} = contextType;
    let types  = getUnique(rooms,'type')
    types = ['all', ...types]
    types = types.map((item,i) => {
        return (
            
            <option onClick={() => res()} value={item} key={i}>{item}</option>
            
            )
        })
        
        function res() {
            window.location = ('rooms/filter')
        }
   
    console.log([...new Set(contextType.rooms.map(item => item.type))])

    return (
        <section className="filter-container">
            <Title title='search rooms'/>
        <div className="filter-form">
            <div className="form-group">
                <label htmlFor="type">Room Type</label>
                <select
                name="type"
                id="type"
                value={type}
                className="form-control"
                onChange={(e) => HandelChange(rooms,e)}
                >
                    {types}
                  
                 
                </select>
            </div>
        </div>
        </section>
    )

}



export default RoomsFilter;