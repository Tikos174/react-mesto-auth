import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function Header({ loggenIn, emailData }) {
  return (
    <header className="header">
      <div className="header__logo"></div>
      {loggenIn ? (
        <Routes>
          <Route
            path="/Register"
            element={
              <Link to="/Login" className="header__login register__link-login">
                Войти
              </Link>
            }
          />
          <Route
            path="/Login"
            element={
              <Link
                to="/Register"
                className="header__login register__link-login"
              >
                Регистрация
              </Link>
            }
          />
          <Route
            path="/Main"
            element={
              <>
              <p className="header__login">{emailData}</p>
                <Link to="/Main" className="header__login register__link-login">
                  Выйти
                </Link>
              </>
            }
          />
        </Routes>
      ) : (
        <div className="header__login register__link-login">
          1231231231
          <Link
            className="header__login register__link-login"
            to="/Login"
          ></Link>
        </div>
      )}
      {/* <Link className="header__login register__link-login" to="/Login">Войти</Link> */}
    </header>
  );
}

export default Header;
