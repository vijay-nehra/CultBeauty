import './App.css';
import bath from'./images/Bath & Body.png';
import Fragrances from'./images/Fragrances.png';
import Group from './images/Group.png';
import Haircare from'./images/Haircare.png';
import LIPSTICK from './images/LIPSTICK 1.png';
import Makeup from'./images/Makeup.png';
import SkincCare from'./images/SkincCare.png';
import back_category from './images/back-category-flower.png';
import badge from'./images/badge (1).png';
import delivery from'./images/delivery (1).png';
import facebook from'./images/facebook.png';
import favorite from'./images/favorite.png';
import hair_serum from './images/hair-serum.png';
import heart from'./images/heart.png';
import hero_image from'./images/hero-image.png';
import hotdeal1 from'./images/hotdeal1.png';
import hotdeal2 from'./images/hotdeal2.png';
import instagram from'./images/instagram.png';
import logo from'./images/logo.png';
import night_cream from'./images/night cream 1.png';
import paymethod from'./images/paymethod.png';
import perfume from'./images/perfume 1.png';
import pink_hero_flower from'./images/pink-hero-flower.png';
import refer_flower from'./images/refer-flower.png';
import return1 from './images/return (1).png';
import shop_women from'./images/shop-women.png';
import twitter from'./images/twitter.png';

function App() {
  return (
    <div id="main">
    <div id="topheader">
        <img src={favorite} alt=""/>
        <p>Free Delivery On <b>FIRST ORDER</b> & $10 OFF : Use Code - <b>MYFIRSTORDER</b></p>
        <img src={favorite} alt=""/>
    </div>
    <div id="navbar">
        <div id="logo">
            <p id="logo-text">cult</p>
            <img src={Group} alt=""/>
        </div>

        <div id="right-menus">
            <div id="menu">
                <ul className="navbar-links">
                    <li className="navbar-dropdown">
                        <a href="#">Categories &#8595;</a>
                        <div className="dropdown">
                            <a href="#">Categories1</a>
                            <a href="#">Categories2</a>
                            <a href="#">Categories3</a>
                        </div>
                    </li>
                    <li className="navbar-dropdown">
                        <a href="#">About</a>
                    </li>
                    <li className="navbar-dropdown">
                        <a href="#">Blog</a>
                    </li>
                    <li className="navbar-dropdown">
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div id="search-wrapper">
                <i className="search-icon fas fa-search"></i>
                <input type="text" id="search" placeholder="typing..."/>
                <button id="search-button">Search</button>
            </div>
            <a href=""><i className="fas fa-shopping-bag"></i></a>
            <a href=""><i className="fas fa-heart"></i></a>
            <a href=""><i className="fas fa-user-alt"></i></a>
        </div>
    </div>
    <div id="hero-section">
        <img src={pink_hero_flower} alt=""/>
        <div id="hero-content">
            <div id="heading">
                <p>Unleash the <span><i>Beauty</i></span> within</p>
                <div id="desc">
                    <p>Elevate your beauty regime with organic,
                        harmless products that enhance your natural
                        radiance & sustainable glow.</p>
                </div>
                <button>Shop Now</button>
            </div>
        </div>
        <div id="hero-image">
            <img src={hero_image} alt=""/>
        </div>
    </div>
    <div id="categories">
        <div id="cat-heading">
            <p>Categories</p>
        </div>
        <img src={back_category} alt=""/>
        <div id="cat-section">
            <div className="cat-product">
                <div className="circle">
                    <img src={SkincCare} alt=""/>
                </div>
                <p>Skin Care</p>
            </div>
            <div className="cat-product">
                <div className="circle" style={{background: '#EDC1FF'}}>
                    <img src={bath} alt=""/>
                </div>
                <p>Bath & Body</p>
            </div>
            <div className="cat-product">
                <div className="circle" style={{background: '#834E99'}}>
                    <img src={Fragrances} alt=""/>
                </div>
                <p>Fragrances</p>
            </div>
            <div className="cat-product">
                <div className="circle" style={{background: '#EDC1FF'}}>
                    <img src={Haircare} alt=""/>
                </div>
                <p>Hair Care</p>
            </div>
            <div className="cat-product">
                <div className="circle">
                    <img src={Makeup} alt=""/>
                </div>
                <p>Makeup</p>
            </div>
        </div>
    </div>
    <div id="bestseller">
        <div id="bestseller-heading">
            <p>Bestseller</p>
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="cards-wrapper">
                        <div className="card">
                            <div className="image-wrapper">
                                <img src={hair_serum} alt="..."/>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">Cult Beauty Hair Serum </h6>
                                <p className="card-text">Non Greasy & Non Oily</p>
                                <h5 className="card-price">$25/50ml</h5>
                                <p className="card-rating"><span>4.5</span><img src={favorite} alt=""/><img
                                        src={favorite} alt=""/><img src={favorite} alt=""/><img
                                        src={favorite} alt=""/></p>
                                <div className="add-section">
                                    <div className="watchlist"><img src={heart} alt=""/></div>
                                    <button>ADD TO BAG</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image-wrapper">
                                <img src={night_cream} alt="..."/>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">Cult Beauty Night Cream</h6>
                                <p className="card-text">Light Weight</p>
                                <h5 className="card-price">$20/100ml</h5>
                                <p className="card-rating"><span>4.0</span><img src={favorite} alt=""/><img
                                        src={favorite} alt=""/><img src={favorite} alt=""/><img
                                        src={favorite} alt=""/></p>

                                <div className="add-section">
                                    <div className="watchlist"><img src={heart} alt=""/></div>
                                    <button>ADD TO BAG</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image-wrapper">
                                <img src={perfume} alt="..."/>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">Cult Beauty Water Lily Perfume</h6>
                                <p className="card-text">24 hrs Long Lasting</p>
                                <h5 className="card-price">$40/50ml</h5>
                                <p className="card-rating"><span>4.1</span><img src={favorite} alt=""/><img
                                        src={favorite} alt=""/><img src={favorite} alt=""/><img
                                        src={favorite} alt=""/></p>

                                <div className="add-section">
                                    <div className="watchlist"><img src={heart} alt=""/></div>
                                    <button>ADD TO BAG</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image-wrapper">
                                <img src={LIPSTICK} alt="..."/>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">Cult Beauty Red Matte Lipstick</h6>
                                <p className="card-text">Smudge Proof/24 hrs Long Lasting</p>
                                <h5 className="card-price">$30/7ml</h5>
                                <p className="card-rating"><span>4.8</span><img src={favorite} alt=""/><img
                                        src={favorite} alt=""/><img src={favorite} alt=""/><img
                                        src={favorite} alt=""/></p>
                                <div className="add-section">
                                    <div className="watchlist"><img src={heart} alt=""/></div>
                                    <button>ADD TO BAG</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item ">
                    <div className="cards-wrapper">
                        <div className="card">
                            <div className="image-wrapper">
                                <img src={perfume} alt="..."/>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">Cult Beauty Water Lily Perfume</h6>
                                <p className="card-text">24 hrs Long Lasting</p>
                                <h5 className="card-price">$40/50ml</h5>
                                <p className="card-rating"><span>4.1</span><img src={favorite} alt=""/><img
                                        src={favorite} alt=""/><img src={favorite} alt=""/><img
                                        src={favorite} alt=""/></p>

                                <div className="add-section">
                                    <div className="watchlist"><img src={heart} alt=""/></div>
                                    <button>ADD TO BAG</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image-wrapper">
                                <img src={hair_serum} alt="..."/>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">Cult Beauty Hair Serum </h6>
                                <p className="card-text">Non Greasy & Non Oily</p>
                                <h5 className="card-price">$25/50ml</h5>
                                <p className="card-rating"><span>4.5</span><img src={favorite} alt=""/><img
                                        src={favorite} alt=""/><img src={favorite} alt=""/><img
                                        src={favorite} alt=""/></p>
                                <div className="add-section">
                                    <div className="watchlist"><img src={heart} alt=""/></div>
                                    <button>ADD TO BAG</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image-wrapper">
                                <img src={LIPSTICK} alt="..."/>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">Cult Beauty Red Matte Lipstick</h6>
                                <p className="card-text">Smudge Proof/24 hrs Long Lasting</p>
                                <h5 className="card-price">$30/7ml</h5>
                                <p className="card-rating"><span>4.8</span><img src={favorite} alt=""/><img
                                        src={favorite} alt=""/><img src={favorite} alt=""/><img
                                        src={favorite} alt=""/></p>
                                <div className="add-section">
                                    <div className="watchlist"><img src={heart} alt=""/></div>
                                    <button>ADD TO BAG</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image-wrapper">
                                <img src={night_cream} alt="..."/>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">Cult Beauty Night Cream</h6>
                                <p className="card-text">Light Weight</p>
                                <h5 className="card-price">$20/100ml</h5>
                                <p className="card-rating"><span>4.0</span><img src={favorite} alt=""/><img
                                        src={favorite} alt=""/><img src={favorite} alt=""/><img
                                        src={favorite} alt=""/></p>

                                <div className="add-section">
                                    <div className="watchlist"><img src={heart} alt=""/></div>
                                    <button>ADD TO BAG</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <div id="hotdeals">
        <div id="hotdeals-heading">
            <p>Hot Deals</p>
        </div>
        <div id="hotdeals-section">
            <div id="hotdeal1">
                <img src={hotdeal1} alt=""/>
            </div>
            <div id="hotdeal2">
                <img src={hotdeal2} alt=""/>
            </div>
        </div>
    </div>
    <div id="refer-earn">
        <div id="refer-section">
            <img src={refer_flower} alt=""/>
            <div id="refer-left-section">
                <p className="title1">Refer Your Friends and Family</p>
                <p className="title">&</p>
                <div id="earn-price">
                    <p id="earn">EARN UPTO $50</p>
                </div>
                <button>GET STARTED</button>
            </div>
            <div id="refer-right-section">
                <img src={shop_women} alt=""/>
            </div>
        </div>
    </div>
    <div id="shipping-section">
        <div id="ship-process">
            <div className="process-card">
                <div className="imagebackground">
                    <img src={delivery} alt=""/>
                </div>
                <div className="card-content">
                    <p><b>Free Shipping</b></p>
                    <hr/>
                    <p>On Orders Above $80</p>
                </div>
            </div>
            <div className="process-card">
                <div className="imagebackground">
                    <img src={return1} alt=""/>
                </div>
                <div className="card-content">
                    <p><b>Easy Returns</b></p>
                    <hr/>
                    <p>15-Days Return Policy</p>
                </div>
            </div>
            <div className="process-card">
                <div className="imagebackground">
                    <img src={badge} alt=""/>
                </div>
                <div className="card-content">
                    <p><b>100% Authentication</b></p>
                    <hr/>
                    <p>Products Sourced Directly</p>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <header>
            <img src={logo} alt=""/>
            <p>9470 192 St. Surrey, BC
                Canada V4N 3R9</p>
            <ul className='icons'>
                <ion-icon className='icon' name="logo-facebook"></ion-icon>
                <ion-icon className='icon' name="logo-instagram"></ion-icon>
                <ion-icon className='icon' name="logo-twitter"></ion-icon>
                <ion-icon className='icon' name="logo-youtube"></ion-icon>
            </ul>
        </header>
        <aside>
            <ul className='category'>
                <li>
                    <h3>Policy</h3>
                </li>
                <li>Shipping Policy</li>
                <li>Cancellation Policy</li>
                <li>Privacy Policy</li>
                <li>Return Policy</li>
                <li>Terms & Conditions</li>
            </ul>
            <ul className='category'>
                <li>
                    <h3>Categories</h3>
                </li>
                <li>Skin care</li>
                <li>Bath & Body</li>
                <li>Fragrances</li>
                <li>Hair care</li>
                <li>Makeup</li>
            </ul>
            <ul className='category'>
                <li>
                    <h3>Company</h3>
                </li>
                <li>About Us</li>
                <li>Our Products</li>
                <li>Blogs</li>
                <li>FAQs</li>
                <li>Sitemap</li>
            </ul>
            <ul className='category'>
                <li>
                    <h3>Follow Us</h3>
                </li>
                <li><span><img src={facebook} alt=""/></span>Facebook</li>
                <li><span><img src={twitter} alt=""/></span>Twitter</li>
                <li><span><img src={instagram} alt=""/></span>Instagram</li>
            </ul>
        </aside>
    </footer>
    <div id="copyrightsection">
        <div id="content">
            <p>Copyright © 2024.Cult Beauty All Rights Reserved.</p>
            <div id="right-cont">
                <p>Accepted Payments</p>
                <img src={paymethod} alt=""/>
            </div>
        </div>
    </div>
</div>
  );
}

export default App;
