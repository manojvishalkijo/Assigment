import React from "react";
import './plantmain.css';


const Plantmain = () => {
    return (
        <div>

            <header class="header" id="header">
                <nav class="nav container">
                    <a href="#" class="nav__logo">
                        <i class="ri-leaf-line nav__logo-icon"></i> Ash Gardens
                    </a>

                    <div class="nav__menu" id="nav-menu">
                        <ul class="nav__list">
                            <li class="nav__item">
                                <a href="#home" class="nav__link active-link">Home</a>
                            </li>
                            <li class="nav__item">
                                <a href="#about" class="nav__link">About</a>
                            </li>
                            <li class="nav__item">
                                <a href="#products" class="nav__link">Products</a>
                            </li>
                            <li class="nav__item">
                                <a href="#faqs" class="nav__link">FAQs</a>
                            </li>
                            <li class="nav__item">
                                <a href="#contact" class="nav__link">Contact Us</a>
                            </li>
                        </ul>

                        <div class="nav__close" id="nav-close">
                            <i class="ri-close-line"></i>
                        </div>
                    </div>

                    <div class="nav__btns">

                        <i class="ri-moon-line change-theme" id="theme-button"></i>

                        <div class="nav__toggle" id="nav-toggle">
                            <i class="ri-menu-line"></i>
                        </div>
                    </div>
                </nav>
            </header>

            <main class="main" >

            <section class="home" id="home">
                <div class="home__container container grid">
                    <img src="C:\Users\manoj\OneDrive\Desktop\ad\app\src\components\home.png" alt="" class="home__img" />

                    <div class="home__data">
                        <h1 class="home__title">
                            The rare plant scent for your living room
                        </h1>
                        <p class="home__description">
                            Create incredible plant design for your offices or apastaments. Add fresness to your new ideas.
                        </p>
                        <a href="#about" class="button button--flex">
                            Explore <i class="ri-arrow-right-down-line button__icon"></i>
                        </a>
                    </div>

                    <div class="home__social">
                        <span class="home__social-follow">Follow Us</span>

                        <div class="home__social-links">
                            <a href="https://www.facebook.com/" target="_blank" class="home__social-link">
                                <i class="ri-facebook-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" class="home__social-link">
                                <i class="ri-instagram-line"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank" class="home__social-link">
                                <i class="ri-twitter-fill"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about section container" id="about">
                <div class="about__container grid">
                <img src={require('./about.png').default} alt="" className="about__img" />

                    <div class="about__data">
                        <h2 class="section__title about__title">
                            Who we really are & why choose us
                        </h2>

                        <p class="about__description">
                            We have over 4000+ unbiased reviews and our customers trust our plant process and delivery service every time
                        </p>

                        <div class="about__details">
                            <p class="about__details-description">
                                <i class="ri-checkbox-fill about__details-icon"></i> We always deliver on time.
                            </p>
                            <p class="about__details-description">
                                <i class="ri-checkbox-fill about__details-icon"></i> We give you guides to protect and care for your plants.
                            </p>
                            <p class="about__details-description">
                                <i class="ri-checkbox-fill about__details-icon"></i> We always come over for a check-up after sale.
                            </p>
                            <p class="about__details-description">
                                <i class="ri-checkbox-fill about__details-icon"></i> 100% money back guaranteed.
                            </p>
                        </div>

                        
                    </div>
                </div>
            </section>

            <section class="steps section container">
                <div class="steps__bg">
                    <h2 class="section__title-center steps__title">
                        Steps to start your plants off right
                    </h2>

                    <div class="steps__container grid">
                        <div class="steps__card">
                            <div class="steps__card-number">01</div>
                            <h3 class="steps__card-title">Choose Plant</h3>
                            <p class="steps__card-description">
                                We have several varieties plants you can choose from.
                            </p>
                        </div>

                        <div class="steps__card">
                            <div class="steps__card-number">02</div>
                            <h3 class="steps__card-title">Place an order</h3>
                            <p class="steps__card-description">
                                Once your order is set, we move to the next step which is the shipping.
                            </p>
                        </div>

                        <div class="steps__card">
                            <div class="steps__card-number">03</div>
                            <h3 class="steps__card-title">Get plants delivered</h3>
                            <p class="steps__card-description">
                                Our delivery process is easy, you receive the plant direct to your door.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="product section container" id="products">
                <h2 class="section__title-center">
                    Check out our products
                </h2>

                <p class="product__description">
                    Here are some selected plants from our showroom, all are in excellent shape and has a long life span. Buy and enjoy best quality.
                </p>
                <center>
                    

                <button class="button button--flex">
                            
                            Go To Store 
                           
                        </button>
                    
                </center>
                </section>

            <section class="questions section" id="faqs">
                <h2 class="section__title-center questions__title container">
                    Some common questions were often asked
                </h2>

                <div class="questions__container container grid">
                    <div class="questions__group">
                        <div class="questions__item">
                            <header class="questions__header">
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                    My flowers are falling off or dying?
                                </h3>
                            </header>

                            <div class="questions__content">
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                        </div>

                        <div class="questions__item">
                            <header class="questions__header">
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                    What causes leaves to become pale?
                                </h3>
                            </header>

                            <div class="questions__content">
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                        </div>

                        <div class="questions__item">
                            <header class="questions__header">
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                    What causes brown crispy leaves?
                                </h3>
                            </header>

                            <div class="questions__content">
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="questions__group">
                        <div class="questions__item">
                            <header class="questions__header">
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                    How do i choose a plant?
                                </h3>
                            </header>

                            <div class="questions__content">
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                        </div>

                        <div class="questions__item">
                            <header class="questions__header">
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                    How do I change the pots?
                                </h3>
                            </header>

                            <div class="questions__content">
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                        </div>

                        <div class="questions__item">
                            <header class="questions__header">
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                    Why are gnats flying around my plant?
                                </h3>
                            </header>

                            <div class="questions__content">
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="questions__group">
                        <div class="questions__item">
                            <header class="questions__header">
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                    How do i choose a plant?
                                </h3>
                            </header>

                            <div class="questions__content">
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                        </div>

                        <div class="questions__item">
                            <header class="questions__header">
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                    How do I change the pots?
                                </h3>
                            </header>

                            <div class="questions__content">
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                        </div>

                        <div class="questions__item">
                            <header class="questions__header">
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                    Why are gnats flying around my plant?
                                </h3>
                            </header>

                            <div class="questions__content">
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <section class="contact section container" id="contact">
                    <div class="contact__container grid">
                        <div class="contact__box">
                            <h2 class="section__title">
                                Reach out to us today via any of the given information
                            </h2>

                            <div class="contact__data">
                                <div class="contact__information">
                                    <h3 class="contact__subtitle">Call us for instant support</h3>
                                    <span class="contact__description">
                                        <i class="ri-phone-line contact__icon"></i>
                                        +91 8838921974
                                    </span>
                                </div>

                                <div class="contact__information">
                                    <h3 class="contact__subtitle">Write us by mail</h3>
                                    <span class="contact__description">
                                        <i class="ri-mail-line contact__icon"></i>
                                        manojvishal125@email.com
                                    </span>
                                </div>
                            </div>
                        </div>

                        <form action="" class="contact__form">
                            <div class="contact__inputs">
                                <div class="contact__content">
                                    <input type="email" placeholder=" " class="contact__input" />
                                    <label for="" class="contact__label">Email</label>
                                </div>

                                <div class="contact__content">
                                    <input type="text" placeholder=" " class="contact__input" />
                                    <label for="" class="contact__label">Subject</label>
                                </div>

                                <div class="contact__content contact__area">
                                    <textarea name="message" placeholder=" " class="contact__input"></textarea>
                                    <label for="" class="contact__label">Message</label>
                                </div>
                            </div>

                            <button class="button button--flex">
                                Send Message
                                <i class="ri-arrow-right-up-line button__icon"></i>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <footer class="footer section"/>
        <div class="footer__container container grid">
            <div class="footer__content">
                <a href="#" class="footer__logo">
                        <i class="ri-leaf-line footer__logo-icon"></i> Ash Gardens
                    </a>

                <h3 class="footer__title">
                    Subscribe to our newsletter to stay update
                </h3>

                <div class="footer__subscribe">
                    <input type="email" placeholder="Enter your email" class="footer__input"/>

                    <button class="button button--flex footer__button">
                            Subscribe
                            <i class="ri-arrow-right-up-line button__icon"></i>
                        </button>
                </div>
            </div>

            <div class="footer__content">
                <h3 class="footer__title">Our Address</h3>

                <ul class="footer__data">
                    <li class="footer__information">1234 - Peru</li>
                    <li class="footer__information">La Libertad - 43210</li>
                    <li class="footer__information">123-456-789</li>
                </ul>
            </div>

            <div class="footer__content">
                <h3 class="footer__title">Contact Us</h3>

                <ul class="footer__data">
                    <li class="footer__information">+91 8838921974</li>

                    <div class="footer__social">
                        <a href="https://www.facebook.com/" class="footer__social-link">
                                <i class="ri-facebook-fill"></i>
                            </a>
                        <a href="https://www.instagram.com/" class="footer__social-link">
                                <i class="ri-instagram-line"></i>
                            </a>
                        <a href="https://twitter.com/" class="footer__social-link">
                                <i class="ri-twitter-fill"></i>
                            </a>
                    </div>
                </ul>
            </div>

            <div class="footer__content">
                <h3 class="footer__title">
                    We accept all credit cards
                </h3>
                <div class="footer--copyright-container">
                <p class="footer__copy">&#169; IsraTech. All rigths reserved</p>
                </div>
                </div>
            </div>
        </div>

        
    

      

        



    );
};

export default Plantmain;




