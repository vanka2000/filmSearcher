import './filmPrevious.css'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function FilmPrevious({item}){

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)



    return <div className='film_block'>
    <h2 className='film_name'>{item.name}</h2>
    <img className='film_picture' src={item.url} alt="#" />
    <p className='film_description'>{item.description}</p>
    <h3 className='film_rating'>Rating : {item.rating}</h3>
    {[...Array(5)].map((star,index) => {
        const currentRating = index + 1
        return ( 
            <label key={index}>
                <input 
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}/>
                <FaStar className='star' 
                    size={50}
                    color={currentRating <= (hover || rating) ? "#ffc107" : "e4e5e9"}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                            />
            </label>
        )
    })}
    <p>Your rating is {rating}</p>
    <Link to={`/library/${item.id}`} className='link'>Смотреть Онлайн</Link>
    </div>
}