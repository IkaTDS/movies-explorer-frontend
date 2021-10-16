export class MainApi {
  constructor(config) {
    this.headers = config.headers;
    this.url = config.url;
  }

  getMovies() {
    return fetch(`${this.url}/movies`, {
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

  saveMovie(movie) {
    return fetch(`${this.url}/movies`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        director: movie.director,
        description: movie.description,
        trailer: movie.trailerLink,
        country: movie.country,
        duration: movie.duration,
        year: `${movie.year}`,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      }),
    }).then(this._getResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this.url}/movies/${movieId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._getResponse);
  }

  getUser(token) {
    return fetch(`${this.url}/users/me`, {
      method: "GET",
      headers: {
        ...this.headers,
        "authorization": `Bearer ${token}`,
      },
    }).then(this._getResponse);
  }

  editUser(data) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._getResponse);
  }

  register(data) {
    return fetch(`${this.url}/signup`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    }).then(this._getResponse);
  }

  login(data) {
    return fetch(`${this.url}/signin`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    }).then(this._getResponse);
  }

  checkToken(token) {
    return fetch(`${this.url}/users/me`, {
      method: "GET",
      headers: {
        ...this.headers,
        "authorization": `Bearer ${token}`,
      },
    }).then(this._getResponse);
  }
}

const mainApi = new MainApi({
  // url: 'https://api.irakliy-diplom.nomoredomains.club',
  url: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
    "authorization": `Bearer ${localStorage.getItem("token")}`,
  },
});

export default mainApi;
