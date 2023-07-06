
class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      credentials: "include",
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      credentials: "include",
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({name: data.name, link: data.link}),
    }).then((res) => this._checkResponse(res));
  }

  getinfoProfil() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: "include",
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  patchProfil(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: "include",
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name: data.name, about: data.about }),
    }).then((res) => this._checkResponse(res));
  }

  editProfilAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      credentials: "include",
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: data.avatar }),
    }).then((res) => this._checkResponse(res));
  }

  deleteCard(cardID) {
    return fetch(`${this._baseUrl}/cards/${cardID}`, {
      credentials: "include",
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  addLike(cardID) {
    return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
      credentials: "include",
      method: "PUT",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  deleteLike(cardID) {
    return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
      credentials: "include",
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }
}

const api = new Api({
  baseUrl: "https://api.mesto.yandex.students.nomoreparties.sbs",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    authorization: "",
  },
});

export default api
