import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import PopupComplete from '../PopupComplete/PopupComplete';
import PopupError from '../PopupError/PopupError';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import * as auth from '../../utils/auth';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

function App() {

  const [movies, setMovies] = useState([]);
  const [userMovies, setUserMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
      name: '',
      email: '',
  });
  const navigate = useNavigate();
  const [popupComplete, setPopupComplete] = useState({ isOpen: false, title: '' });
  const [popupError, setPopupError] = useState({ isOpen: false });
  const [isUserSending, setIsUserSending] = useState(false);
  const [isMoviesApiResponded, setIsMoviesApiResponded] = useState(true);
  useEffect(() => {
    handleTokenCheck();
    handleLoadMainInfo();
  }, []);

  function handleLoadMainInfo() {
    Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
        .then(([userInfo, userMovies]) => {
          setCurrentUser(userInfo.data);
          setUserMovies(userMovies.data);
        })
        .catch((err) => console.log(err));
  }

  function handleLoadMovies() {
    moviesApi.getMovies()
      .then(movies => {
        setMovies(movies);
        setIsMoviesApiResponded(true);
      })
      .catch(err => {
        console.log(err);
        setIsMoviesApiResponded(false);
      })
  }

  function handleTokenCheck() {
    if (localStorage.getItem('jwt')) {
        auth.checkToken(localStorage.getItem('jwt'))
          .then((res) => {
              if (res) {
                  mainApi.setToken(localStorage.getItem('jwt'));
                  handleLoadMainInfo();
                  setLoggedIn(true);
                  if (res.data) {
                      navigate('/movies', { replace: true });
                  }
              }
          })
          .catch((err) => console.log(err));
    }
  }

  function handleLogin({ email, password }) {
    setIsUserSending(true)
    auth.authorize(email, password)
      .then((data) => {
          if (data.token) {
              mainApi.setToken(data.token);
              setLoggedIn(true);
              handleLoadMainInfo();
              navigate('/movies', { replace: true });
          }
      })
      .catch((err) => {
          console.log(err);
          openPopupError();
      })
      .finally(() => setIsUserSending(false));
  }

  function handleRegister({ name, email, password }) {
    setIsUserSending(true)
      auth.register(name, email, password)
      .then((res) => {
        auth.authorize(email, res.password)
        .then((data) => {
            if (data.token) {
                mainApi.setToken(data.token);
                setLoggedIn(true);
                handleLoadMainInfo();
                navigate('/movies', { replace: true });
                openPopupCompleteRegister();
            }
        })
        .catch((err) => {
          console.log(err);
          openPopupError();
        })
      })
      .catch((err) => {
          console.log(err);
          openPopupError();
      })
      .finally(() => setIsUserSending(false));
  }

  function handleUpdateUser({ name, email }) {
    mainApi.changeUserInfo({ name, email })
      .then((info) => {
          setCurrentUser(info.data);
          openPopupCompleteProfile();
      })
      .catch((err) => {
        console.log(err);
        openPopupError();
      });
  }

  function handleSaveCard(card) {
    const newCard = {
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: card.link,
      trailer: card.trailerLink,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
      thumbnail: 'https://api.nomoreparties.co/' + card.image.formats.thumbnail.url,
      movieId: card.id,
    }
    mainApi.addCard(newCard)
    .then((card) => { 
      setUserMovies([...userMovies, card.data]);
    })
    .catch(err => {
      console.log(err);
    });
  }

  function handleDeleteCard(cardId) {
    mainApi.deleteCard(cardId)
    .then((res) => {
        setUserMovies((state) => state.filter((c) => c._id !== cardId));
    })
    .catch((err) => console.log(err));
  }

  function openPopupCompleteRegister() {
    setPopupComplete({
      isOpen: true,
      title: 'Вы успешно зарегистрировались!'
    });
  }

  function openPopupCompleteProfile() {
    setPopupComplete({
      isOpen: true,
      title: 'Изменения сохранены!'
    });
  }

  function openPopupError() {
    setPopupError({ isOpen: true });
  }

  function closeAllPopups() {
    setPopupComplete({ isOpen: false });
    setPopupError({ isOpen: false });
  }

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path='/'
            element={ 
              <Main 
                loggedIn={loggedIn}
              />
              }/>

          <Route
            path='/sign-up'
            element={
              <Register 
                handleRegister={handleRegister}
                isSending={isUserSending}
              /> 
            }/>

          <Route
            path='/sign-in'
            element={
              <Login 
                handleLogin={handleLogin}
                isSending={isUserSending}
              /> 
            }/>

          <Route
            path='/saved-movies'
            element={
              <ProtectedRouteElement
                element={ SavedMovies }
                loggedIn={loggedIn}
                userMovies={userMovies}
                handleDeleteCard={handleDeleteCard}
              />
            }
          />

          <Route
            path='/movies'
            element={
              <ProtectedRouteElement
                element={ Movies }
                loggedIn={loggedIn}
                movies={movies}
                apiRes={isMoviesApiResponded}
                handleSaveCard={handleSaveCard}
                userMovies={userMovies}
                handleDeleteCard={handleDeleteCard}
                handleLoadMovies={handleLoadMovies}
              />
            }
          />

          <Route
            path='/profile'
            element={
              <ProtectedRouteElement
                element={ Profile }
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                handleUpdateUser={handleUpdateUser}
              />
            }
          />

          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </CurrentUserContext.Provider>
      <PopupComplete
          isOpen={popupComplete.isOpen}
          onClose={closeAllPopups}
          title={popupComplete.title}
      />

      <PopupError
          isOpen={popupError.isOpen}
          onClose={closeAllPopups}
      />


    </div>
    
  );
}

export default App;
