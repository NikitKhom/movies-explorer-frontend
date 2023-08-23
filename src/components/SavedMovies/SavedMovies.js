import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
    return (
        <>
            <Header></Header>
            <main className='saved-movies'>
                <SearchForm></SearchForm>
                <MoviesCardList isMoviesSaved={true}></MoviesCardList>
            </main>
            <Footer></Footer>
        </>

    )
}

export default SavedMovies;