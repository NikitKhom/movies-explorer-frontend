class MoviesApi {
    constructor(){
        this._baseUrl = 'https://api.nomoreparties.co/beatfilm-movies';
    }

    getMovies(){
        return this._checkServerStatus(
            fetch(this._baseUrl, {
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

}


const  moviesApi = new MoviesApi();
export default moviesApi;