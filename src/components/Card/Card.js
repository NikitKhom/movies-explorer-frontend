function Card({ card, isMovieSaved = false }) {

    const {title, duration, isLiked, link} = card;

    function getTimeFromMins(mins) {
        const hours = Math.trunc(mins/60);
        const minutes = mins % 60;
        return hours + 'ч' + minutes + 'м';
    }

    return (
        <div className='card'>
            <img className='card__image' src={link} alt={title}></img>
            <div className='card__container'>
                <h2 className='card__title'>{title}</h2>
                {isMovieSaved
                ? <button className='card__button card__button_type_delete' type='button'></button>
                : <button className={`card__button card__button_type_like ${isLiked ? 'card__button_type_like_active' : ''}`} type='button'></button>}
            </div>
            <p className='card__duration'>{getTimeFromMins(duration)}</p>
        </div>
    )
}

export default Card;