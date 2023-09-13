import { useEffect, useMemo, useState } from 'react';
import PreLoader from '../PreLoader/PreLoader';
import Card from '../Card/Card';

function MoviesCardList({ 
    cards,
    isNoCards=false,
    handleSaveCard,
    handleDeleteCard,
    isMoviesSaved = false,
    userMovies, 
    message='Фильмов пока нет'
    }) {
    const [isOnPage, setIsOnPage] = useState(isNoCards);
    const [renderMoreButton, setRenderMoreButton] = useState(false);
    const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);
    const [additionalRows, setAdditionalRows] = useState(0);
    let baseCards = 0;
    let additionalCards = 0;
    useEffect(() => {
        setAdditionalRows(0);
        if (cards.length === 0) {
            setIsOnPage(true);
        } else {
            setIsOnPage(false);
        }
    }, [cards]);

    useEffect(() => {
        const findWidth = () => {
            setWindowWidth(document.documentElement.clientWidth);
          };

        let resizeTimeout;
        function resizeThrottler() {
          if ( !resizeTimeout ) {
            resizeTimeout = setTimeout(() => {
              resizeTimeout = null;
              findWidth();
             }, 500);
          }
        }
        window.addEventListener('resize', resizeThrottler);
        return () => {
            window.removeEventListener('resize', resizeThrottler);
        }
    }, [])

    const renderCards = useMemo(() => {
        if (!isMoviesSaved) {
            if (windowWidth > 800) {
                baseCards = 16;
                additionalCards = 4;
            } else if ( windowWidth > 500) {
                baseCards = 8;
                additionalCards = 2;
            } else {
                baseCards = 5;
                additionalCards = 2;
            }
            const currentCards = cards.map(card => {
                return JSON.parse(card);
            });
            if (baseCards + (additionalCards * additionalRows) < cards.length && !isMoviesSaved) {
                setRenderMoreButton(true);
            } else {
                setRenderMoreButton(false);
            }
            return currentCards.slice(0, baseCards + (additionalCards * additionalRows));
        }
        return cards;
    }, [cards, windowWidth, isMoviesSaved, baseCards, additionalCards, additionalRows]);

    function showMoreCards() {
        if (baseCards + (additionalCards * (1 + additionalRows)) < cards.length) {
            setAdditionalRows(additionalRows + 1);
        }
    }

    return (
        <section className='movies-card-list'>
            <PreLoader
                message={message}
                isOnPage={isOnPage}    
            />
            
            <ul className='movies-card-list__list'>
                {!isMoviesSaved
                    ? renderCards.map((card) => <Card card={card} key={card.id} handleSaveCard={handleSaveCard} userMovies={userMovies} handleDeleteCard={handleDeleteCard}/>)
                    : cards.map((card) => <Card card={card} key={card.movieId} isMovieSaved={isMoviesSaved} handleDeleteCard={handleDeleteCard}/>)}
            </ul>
            
            {renderMoreButton && <button className='movies-card-list__more-cards-btn' type='button' onClick={showMoreCards}>Ещё</button>}
        </section>

    )
}

export default MoviesCardList;
