import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Film(){
    const id = useParams()
    const film = useSelector((state) => state.search.films.filter(item => item.id == id.id)[0])
    const str = film.video.split('https://www.youtube.com/watch?v=')[1]
    return <div className="film">
        <h2 className="film_name">{film.name}</h2>
        <img className="film_picture" src={film.url} alt="#" />
        <p className="film_description">{film.description}</p>
        <iframe className='video'
            title='Youtube player'
            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
            src={`https://youtube.com/embed/${str}?autoplay=0`}>
        </iframe>
    </div>
}