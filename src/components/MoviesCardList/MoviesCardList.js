import Card from '../Card/Card';
import avatar from '../../images/avatar.jpg';

function MoviesCardList({cards, isMoviesSaved = false}) {
    const card = {
        title: 'Card',
        duration: 129,
        link: avatar,
        isLiked: true,
    }
    return (
        <section className='movies-card-list'>
            <ul className='movies-card-list__list'>
                <li><Card card ={card} isMovieSaved={isMoviesSaved}></Card></li>
                <li><Card card ={card} isMovieSaved={isMoviesSaved}></Card></li>
                <li><Card card ={card} isMovieSaved={isMoviesSaved}></Card></li>
                <li><Card card ={card} isMovieSaved={isMoviesSaved}></Card></li>
                <li><Card card ={card} isMovieSaved={isMoviesSaved}></Card></li>
            </ul>
            {!isMoviesSaved && <button className='movies-card-list__more-cards-btn' type='button'>Ещё</button>}
        </section>

    )
}

export default MoviesCardList;