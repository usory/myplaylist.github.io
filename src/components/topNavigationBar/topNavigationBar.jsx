import React from "react";
import { Link } from "react-router-dom";
import styles from "./topNavigationBar.module.css";
const TopNavigationBar = ({ token }) => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/">
          <h1 className={styles.logo}>
            <img src="/images/Logo-hodu.png" alt="logo" />
          </h1>
        </Link>
        <div className={styles.input_wrap}>
          <input type="text" placeholder="상품을 검색해보세요!" />
          <img src="/images/icon-search.svg" alt="search" />
        </div>
      </div>

      <div className={styles.menu}>
        <Link to="/cart">
          <div className={styles.shopping_cart}>
            <img src="/images/icon-shopping-cart.svg" alt="cart" />
            <span>장바구니</span>
          </div>
        </Link>
        {token ? (
          <Link to="#">
            <div className={styles.mypage}>
              <img src="/images/icon-user.svg" alt="user" />
              <span>마이페이지</span>
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <div className={styles.mypage}>
              <img src="/images/icon-user.svg" alt="user" />
              <span>로그인</span>
            </div>
          </Link>
        )}
      </div>
    </header>
  );
};

export default TopNavigationBar;
