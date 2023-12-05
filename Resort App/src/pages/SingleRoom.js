import { useContext } from "react";
import { RoomContext } from "../Context";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";

const SingleRoom = () => {
  const contextType = useContext(RoomContext);
  const { getRoom } = contextType;
  let room = getRoom(window.location.pathname.split("").slice(7).join(""));


   

  if (!room) {
    return (
      <div className="error">
        <h3>No Such could Be Found...</h3>
        <Link to={"/rooms"} className="btn-primary">
          Back To Rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
 
  return (
    <>
    <Hero hero='roomsHero'>
      <Banner title={`${name} room`}>
        <Link to={"/rooms"} className="btn-primary">
          Back To Rooms
        </Link>
      </Banner>
    </Hero>
    <section className="single-room">
      <div className="single-room-images">
      {images.map((item,i) => {
        return <img key={i} src={item} alt={name}/>
      })}
      </div> 
      <div className="single-room-info ">
        <article className="desc">
        <h3>Details</h3>
        <p>{description}</p>
        </article>
        <article className="info">
        <h3>Info</h3>
        <h6>price: ${price}</h6>
        <h6>Size:{size} SQFT</h6>
        <h6>
          Max Capacity:{
          
            capacity > 1 ? `${capacity} people`: `${capacity} person`
          }
          </h6> 
          <h6>{pets ? 'pets allowed':'Not pets allowed'}</h6>
          <h6>{breakfast && 'Free Breakfast Included'}</h6>
        </article>
      </div>
    </section>

          <section className="room-extras">


          <h6>Extras</h6>
          <ul className="extras">
          {extras.map((item,i) => {
            return (
              <li key={i}>- {item}</li>
            )
          })}
          </ul>


          </section>


    </>

  );
};

export default SingleRoom;
