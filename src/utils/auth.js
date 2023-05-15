const URL = "https://auth.nomoreparties.co"

export function registerPost(email,  password){
    return fetch(`${URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
    },
    body: JSON.stringify({ email, password }),
      })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
}

export function authorizationPost(email,  password){
    return fetch(`${URL}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
    },
    body: JSON.stringify({ email, password }),
      })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
}

export function checkToken(token){
    return fetch(`${URL}/users/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Authorization" : `Bearer ${token}`
    },
      })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
}