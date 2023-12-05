import React, { createContext, useEffect } from "react";
import { useState } from "react";
import items from './data'
import FeatureRoom from "./pages/FeatureRooms";
import Room from "./components/Room";



const RoomContext = createContext()







function RoomProvider({children})  {
    

    let [filter,filtered] = useState({
        rooms:[]
    })
    
    let  [myRooms] = useState({
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false,
})
    
    function ComponentDidMount(){
        let rooms = formaData(items)
        
        let featuredRooms = rooms.filter(room => room.featured === true)


        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));

        myRooms = {
                rooms,
                sortedRooms:rooms,
                featuredRooms,
                loading:false,
                price:maxPrice,
                maxPrice,
                maxSize
        }
   
    }
    
    
    function formaData(items) {
        let tempItems =  items.map(item => {
            let id = item.sys.id;
    
            let images = item.fields.images.map(image => 
                image.fields.file.url
                );
                
                let room = {...item.fields, images, id}
                return room
                
        })
        return tempItems
    }
    

    
    const getRoom = (slug) => {
        let tempRooms = [...myRooms.rooms]
        let room =  tempRooms.find(room => room.slug === slug)
            return room
        }
        
        
        
        
       
        
        
        
          function HandelChange(rooms,e)  {
            let targetValue = e.target.value;
            let myRooms = rooms.map(room => room)
            let  myRoomsFilter =  myRooms.filter(item => item.type === targetValue)
            
            localStorage.setItem('filter',JSON.stringify(myRoomsFilter))
               
                
            
        }

        
       
                    ComponentDidMount()
               



            return (
            <RoomContext.Provider value={{...myRooms,getRoom,HandelChange,filtered}}>
        {children}
        </RoomContext.Provider>
    )
}






let RoomConsumer  = RoomContext.Consumer;



export {RoomContext,RoomProvider,RoomConsumer}