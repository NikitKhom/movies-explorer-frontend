import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
function Movies({ movies, apiRes=false, handleSaveCard, handleDeleteCard, userMovies, handleLoadMovies }) {
    const [checked, setChecked] = useState(Boolean(localStorage.getItem('checkbox')) || false);
    const [formValue, setFormValue] = useState({
        search: localStorage.getItem('search') || '',
	});
    const [cards, setCards] = useState(JSON.parse(localStorage.getItem('movies')) || []);
    const [ message, setMessage] = useState('Пока фильмов нет');
    const validMovies = movies.map(movie => {
        movie.link = 'https://api.nomoreparties.co/' + movie.image.url;
        movie.movieId = movie.id;
        return movie;
    })

    useEffect(() => {
        filterMovies();
    }, [movies, checked]);

    useEffect(() => {
        if (!apiRes) {
            setCards([]);
            setMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        }
    }, [apiRes])



	function handleChange(e) {
        const {name, value} = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
	}

    function handleChangeCheckbox() {
        setChecked(!checked);
        if (movies.length === 0) {
            handleLoadMovies();
        }
    }

    function filterMovies() {
        if (movies.length === 0) {
            return;
        }
        const foundCards = [];
        for (let i = 0; i < validMovies.length; i++) {
            let movie = validMovies[i];
            const nameRU = movie.nameRU.toLowerCase();
            const nameEN = movie.nameEN.toLowerCase();
            if (nameRU.indexOf(formValue.search.toLowerCase()) >= 0
                || nameEN.indexOf(formValue.search.toLowerCase()) >= 0) {
                if (checked && movie.duration > 40) {
                    continue;
                }
                foundCards.push(JSON.stringify(movie));
            }
        }
        setCards(foundCards);
        
        if (foundCards.length === 0 && movies.length !== 0) {
            setMessage('Ничего не найдено');
            return;
        }
        saveInLocalStorage(foundCards);
    }

    function saveInLocalStorage(foundCards) {
        localStorage.setItem('movies', JSON.stringify(foundCards));
        localStorage.setItem('checkbox', checked ? '1' : '');
        localStorage.setItem('search', formValue.search);
    }

	function handleSubmit(e) {
        if (movies.length === 0) {
            handleLoadMovies();
        }
        filterMovies();
        e.preventDefault();
    }

    return (
        <>
            <Header />
            <main className='movies'>
                <SearchForm
                    onSubmit={handleSubmit}
                    onInputChange={handleChange}
                    checked={checked}
                    onCheckboxChange={handleChangeCheckbox}
                    value={formValue.search}
                />
                <MoviesCardList
                    message={message}
                    cards={cards}
                    handleSaveCard={handleSaveCard}
                    handleDeleteCard={handleDeleteCard}
                    userMovies={userMovies}
                />
            </main>
            <Footer></Footer>
        </>
        
    )
}

export default Movies;