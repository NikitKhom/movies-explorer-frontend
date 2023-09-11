class MainApi {
    constructor({baseUrl}){
        this._baseUrl = baseUrl;
    }

    getUserInfo(){
        return this._checkServerStatus(
            fetch(`${this._baseUrl}/users/me`, {
                headers: this._headers
            })
        )
    }

    getMovies(){
        return this._checkServerStatus(
            fetch(`${this._baseUrl}/movies`, {
                headers: this._headers
            })
        )
    }

    changeUserInfo({ name, email }) {
        return this._checkServerStatus(
            fetch(`${this._baseUrl}/users/me`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({ name, email })
            })
        )
    }

    addCard({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
        owner,
    }) {
        return this._checkServerStatus(
            fetch(`${this._baseUrl}/movies`, {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    country,
                    director,
                    duration,
                    year,
                    description,
                    image,
                    trailer,
                    nameRU,
                    nameEN,
                    thumbnail,
                    movieId,
                    owner,
                })
            })
        )
    }

    deleteCard(movieId){
        return this._checkServerStatus(
            fetch(`${this._baseUrl}/movies/${movieId}`, {
                method: 'DELETE',
                headers: this._headers
            })
        )
    }


    _checkServerStatus(promise) {
        return promise
        .then(res => {
            if (res.ok) {
                return  res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    setToken(token) {
        this._headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
}


const  mainApi = new MainApi({
    baseUrl: 'https://api.nikitkhom.movie.nomoreparties.co',
});
export default mainApi;