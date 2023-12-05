
import { Link } from 'react-router-dom';
import defaultingImg from '../images/room-1.jpeg'
import { PropTypes } from 'prop-types';


const Room = ({room}) => {




    const {name,slug,images,price} = room
        
    return (
        <section className="room">
            <div className="img-container">
                <img src={images[0] || defaultingImg} alt="img"/>
                <div className='price-top'>
                    <h6>${price}</h6>
                    <p>Per Night</p>
                </div>
                <Link to={`/rooms/${slug}`} className='btn-primary room-link' >Features</Link>
            </div>
            <p className='room-info'>{name}</p>
        </section>
    )
}


Room.propTypes = {
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}


export default Room;