
function Card({ card, handleSaveCard, userMovies, isMovieSaved = false, handleDeleteCard }) {
    const title = card.nameRU;
    const duration = card.duration;
    let isLiked = false;
    let link = '';
    if (isMovieSaved) {
        link = card.image;
    } else {
        link = card.link;
        const movie = userMovies.find(c => c.movieId === card.id);
        if (movie) {
            card._id = movie._id;
            isLiked = true;
        }
    }

    function getTimeFromMins(mins) {
        const hours = Math.trunc(mins/60);
        const minutes = mins % 60;
        if (!hours) {
            return minutes + 'м';
        }
        return hours + 'ч' + minutes + 'м';
    }

    function handleSave() {
        handleSaveCard(card);
    }

    function handleDelete() {
        handleDeleteCard(card._id);
    }

    return (
        <li className='card'>
            <img className='card__image' src={link} alt={title}></img>
            <div className='card__container'>
            <h2 className='card__title'>{title}</h2>
            {
                isMovieSaved
                ? <button
                    className='card__button card__button_type_delete'
                    type='button'
                    onClick={handleDelete}>
                </button>
                : <>
                    {
                        isLiked
                            ? <button 
                                className='card__button card__button_type_like card__button_type_like_active'
                                type='button'
                                onClick={handleDelete}>
                            </button>
                            : <button
                                className='card__button card__button_type_like'
                                type='button'
                                onClick={handleSave}>
                            </button>
                    }
                </>
            }
            </div>
            <p className='card__duration'>{getTimeFromMins(duration)}</p>
        </li>
    )
}

export default Card;

