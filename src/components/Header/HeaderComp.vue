<script setup>
import './HeaderComp.css';
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <router-link to="/" class="logo">
                    <img src="/img/asaxiy-logo.svg" alt="Logo" />
                </router-link>
                <div class="header__category">
                    <div class="header__burger-small">
                        <div class="header__burger-line"></div>
                        <div class="header__burger-line"></div>
                        <div class="header__burger-line"></div>
                    </div>
                    <span>Bo'limlar</span>
                </div>
                <form action="">
                    <input class="header__inp" type="text" name="" id="" placeholder="Qidirish.."/>
                    <button class="header__search">Qidirish</button>
                </form>
                <ul class="header__list">
                    <li class="header__item">
                        <img src="/img/compare_header.svg" height="20" width="24" alt="Taqqoslash" />
                        <p class="header__text">Taqqoslash</p>
                    </li>
                    <li class="header__item">
                        <img src="/img/payment.svg" height="20" width="26" alt="To'lo'v" />
                        <p class="header__text">To'lo'v</p>
                    </li>
                    <li class="header__item">
                        <img src="/img/tracker.svg" height="20" width="24" alt="Trek" />
                        <p class="header__text">Trek</p>
                    </li>
                    <li class="header__item">
                        <img src="/img/cart.svg" height="20" width="20" alt="Savatcha" />
                        <p class="header__text">Savatcha</p>
                    </li>
                    <li class="header__item">
                        <img src="/img/heart.svg" height="20" width="23" alt="Sevimlilar" />
                        <p class="header__text">Sevimlilar</p>
                    </li>
                    <li class="header__item">
                        <img src="/img/compare_header.svg" height="20" width="24" alt="Til" />
                        <p class="header__text">Til</p>
                    </li>
                    <li class="header__item">
                        <img src="/img/avatar.svg" height="20" width="15" alt="Kirish" />
                        <p class="header__text">Kirish</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="header__bottom">
            <div class="container">
                <ul class="header__bottom-list">
                    <li class="header__bottom-item">
                        <router-link to="/category" class="header__bottom-link">Chegirmalar</router-link>
                    </li>
                    <li class="header__bottom-item">
                        <router-link to="/category" class="header__bottom-link">0-0-6</router-link>
                    </li>
                    <li class="header__bottom-item">
                        <router-link to="/category" class="header__bottom-link">Smartfonlar</router-link>
                    </li>
                    <li class="header__bottom-item">
                        <router-link to="/category" class="header__bottom-link">Maishiy texnika</router-link>
                    </li>
                    <li class="header__bottom-item">
                        <router-link to="/category" class="header__bottom-link">Kitoblar</router-link>
                    </li>
                    <li class="header__bottom-item">
                        <router-link to="/category" class="header__bottom-link">Noutbooklar</router-link>
                    </li>
                    <li class="header__bottom-item">
                        <router-link to="/category" class="header__bottom-link">Bestseller 2024</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
