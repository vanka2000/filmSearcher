import './library.css'
import { useSelector, useDispatch } from 'react-redux'
import { getSearch, addFilm } from '../redux/slices/searchSlice'
import FilmPrevious from '../components/filmPrevious/filmPrevious'
export default function Library(){
    const filteredFilms = useSelector((state) => state.search.filteredFilms)
    const dispatch = useDispatch()

    function filterFilms(e){
        e.preventDefault()
        dispatch(getSearch(e.target.children[0].value))
    }

    function add(e){
        e.preventDefault()
        const {name, url, video, description} = e.target.elements
        dispatch(addFilm({name : name.value, url : url.value, video : video.value, description : description.value}))
    }
    

    return(
        <div className='library'>
            <div className="library_cont_search">
                <form className='form_search' onSubmit={filterFilms}>
                    <input className='input_search' placeholder='Введите название фильма' type="search" name="Поиск" />
                    <button className='btn_search' >Найти</button>
                </form>
            </div>
            <div className="formAddFilm">
                <form className='form_inp' onSubmit={add}>
                    <input name="name" placeholder='Название'/>
                    <input name="url" placeholder='Постер'/>
                    <input name="video" placeholder='Ссылка на фильм с Ютуба'/>
                    <textarea name="description" placeholder='Описание'/>
                    <button className='add_film_btn'>Add Film</button>
                </form>
            </div>
            <div className="library_cont_films">
                {filteredFilms.map((item) => {
                    return <FilmPrevious key={item.id} item ={item}/>
                })}
            </div>
        </div>
    )
}