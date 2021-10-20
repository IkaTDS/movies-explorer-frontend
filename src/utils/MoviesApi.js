class MoviesApi {
  constructor(config) {
    this.headers = config.headers;
    this.url = config.url;
  }

  getMovies() {
    return fetch(this.url, {
      method: "GET",
      headers: this.headers,
    }).then(this._getResponse);
  }

  _getResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
}

const moviesApi = new MoviesApi({
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;
