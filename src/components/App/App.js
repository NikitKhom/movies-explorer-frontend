import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/sign-up' element={<Register />}></Route>
        <Route path='/sign-in' element={<Login />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/saved-movies' element={<SavedMovies />}></Route>
        <Route path='/profile' element={<Profile name='Никита' email='example@yandex.com'/>}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
