import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';

function SavedMovies({ userMovies, handleDeleteCard }) {

    const [checked, setChecked] = useState(false);
    const [formValue, setFormValue] = useState({
        search: '',
	});
    const [cards, setCards] = useState(userMovies);
    useEffect(() => {
        filterMovies();
    }, [checked, userMovies]);

	function handleChange(e) {
        const {name, value} = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
	}

    function handleChangeCheckbox() {
        setChecked(!checked);
    }

    function filterMovies() {
        setCards([]);
        const foundCards = [];
        for (let i = 0; i < userMovies.length; i++) {
            let movie = userMovies[i];
            const nameRU = movie.nameRU.toLowerCase();
            const nameEN = movie.nameEN.toLowerCase();
            if (nameRU.indexOf(formValue.search.toLowerCase()) >= 0
                || nameEN.indexOf(formValue.search.toLowerCase())) {
                if (checked && movie.duration > 40) {
                    continue;
                }
                foundCards.push(JSON.stringify(movie));
            }
        }
        setCards(foundCards);
    }

	function handleSubmit(e) {
        e.preventDefault();
        filterMovies();
    }

    return (
        <>
            <Header></Header>
            <main className='saved-movies'>
                <SearchForm
                    onSubmit={handleSubmit}
                    onInputChange={handleChange}
                    checked={checked}
                    onCheckboxChange={handleChangeCheckbox}
                    value={formValue.search}
                />
                <MoviesCardList
                    isMoviesSaved={true}
                    cards={cards}
                    handleDeleteCard={handleDeleteCard}
                />
            </main>
            <Footer></Footer>
        </>
    )
}

export default SavedMovies;