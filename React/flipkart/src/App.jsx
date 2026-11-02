
import '../CSS/global.css'
import '../CSS/navbar.css'
import '../CSS/hero.css'
import '../CSS/services.css'
import '../CSS/offers.css'
import '../CSS/earn.css'
import '../CSS/download.css'
import '../CSS/footer.css'
import '../CSS/responsive.css'

import logo from './assets/NewLogo.svg'
import banner from './assets/banner_image_new.png'
import bikeService from './assets/serviceimage.svg'
import autoService from './assets/auto_service.png'
import cabService from './assets/cab_service.png'
import parcelService from './assets/parcel_service.png'
import travelService from './assets/travel_service.png'
import metroService from './assets/metro_service.png'
import quickPickup from './assets/image.png'
import bestFares from './assets/bestfare_offer.png'
import neverTooFar from './assets/nevertofar_offer.png'
import showcaseImage from './assets/showcase_image.png'

function App() {
    return (
        <>
            <header className="site-header">
                <nav className="navbar navbar-expand-lg rapido-navbar">
                    <div className="container">

                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="Rapido Logo" />
                        </a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="navbar-nav rapido-nav ms-auto">

                                <a className="nav-link active" href="#">Home</a>
                                <a className="nav-link" href="#">About Us</a>
                                <a className="nav-link" href="#">Safety</a>
                                <a className="nav-link" href="#">Careers</a>
                                <a className="nav-link" href="#">Blog</a>
                                <a className="nav-link" href="#">Press</a>
                                <a className="nav-link" href="#">Contact Us</a>

                                <a href="#" className="download-btn">
                                    Download App
                                </a>

                            </div>
                        </div>

                    </div>
                </nav>
            </header>

            <main className="hero-section">
                <div className="container">
                    <div className="row align-items-center hero-row">

                        <div className="col-12 col-lg-6 hero-content">

                            <h1 className="hero-title">
                                India's #1<br />
                                Ride-hailing App
                            </h1>

                            <p className="hero-subtitle">
                                Quick, Affordable rides at your doorstep
                            </p>

                            <form className="booking-form" action="#" method="get">

                                <label className="location-box">
                                    <span className="location-icon">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </span>

                                    <input
                                        type="text"
                                        name="pickup"
                                        placeholder="Enter Pickup Location"
                                        aria-label="Enter Pickup Location"
                                    />
                                </label>

                                <label className="location-box">
                                    <span className="drop-icon">
                                        <i className="fa-solid fa-circle-dot"></i>
                                    </span>

                                    <input
                                        type="text"
                                        name="drop"
                                        placeholder="Enter Drop Location"
                                        aria-label="Enter Drop Location"
                                    />
                                </label>

                                <button className="book-ride-btn" type="submit">
                                    Book Ride
                                </button>

                            </form>

                        </div>

                        <div className="col-12 col-lg-6 hero-image-column">
                            <img
                                src={banner}
                                className="hero-image img-fluid"
                                alt="Rapido bike, auto and cab services"
                            />
                        </div>

                    </div>
                </div>
            </main>

            <section className="services-section">
                <div className="container">

                    <h2 className="services-title">Our Services</h2>
                    <div className="title-underline"></div>

                    <div className="row services-row">

                        <div className="col-12 col-md-6 col-lg-4">
                            <img src={bikeService} className="service-image" alt="Bike Taxi" />
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <img src={autoService} className="service-image" alt="Auto" />
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <img src={cabService} className="service-image" alt="Cab" />
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <img src={parcelService} className="service-image" alt="Parcel" />
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <img src={travelService} className="service-image" alt="Travel and Stay" />
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <img src={metroService} className="service-image" alt="Metro Ticket" />
                        </div>

                    </div>
                </div>
            </section>

            <section className="offer-section">
                <div className="container">

                    <h2 className="offer-title">What we offer</h2>
                    <div className="title-underline"></div>

                    <div className="row offer-row">

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="offer-card">

                                <img
                                    src={quickPickup}
                                    className="offer-image"
                                    alt="Quick Pickup"
                                />

                                <h3>Quick Pickup</h3>

                                <p>
                                    Pickups within minutes that help you save time
                                    on every ride. A Rapido is always nearby when
                                    you need to get moving.
                                </p>

                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="offer-card">

                                <img
                                    src={bestFares}
                                    className="offer-image"
                                    alt="Best Fares"
                                />

                                <h3>Best Fares</h3>

                                <p>
                                    Affordable prices designed for everyday rides.
                                    Travel more, spend less without compromising
                                    on comfort.
                                </p>

                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="offer-card">

                                <img
                                    src={neverTooFar}
                                    className="offer-image"
                                    alt="Never Too Far"
                                />

                                <h3>Never Too Far</h3>

                                <p>
                                    Present across 400+ cities and counting.
                                    Wherever you go, find a Rapido ride close by.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="earn-section">
                <div className="container">
                    <div className="row align-items-center earn-row">

                        <div className="col-12 col-lg-6">
                            <img
                                src={showcaseImage}
                                className="earn-image"
                                alt="Rapido Captain"
                            />
                        </div>

                        <div className="col-12 col-lg-6 earn-content">

                            <h2>Earn with Rapido</h2>
                            <div className="earn-underline"></div>

                            <p>
                                Become a Rapido Captain. Ride when you want,
                                work how you want, and earn on your own terms.
                            </p>

                            <a href="#" className="start-earning-btn">
                                Start Earning <span>&#8594;</span>
                            </a>

                        </div>

                    </div>
                </div>
            </section>

            <section className="download-section">
                <div className="container">

                    <h2 className="download-title">Download Now</h2>
                    <div className="title-underline"></div>

                    <div className="row download-row">

                        <div className="col-12 col-lg-6">
                            <a href="#" className="download-card">

                                <img src={logo} alt="Rapido Customer App" />

                                <span>
                                    Bike-Taxi,<br />
                                    Auto &amp; Cabs
                                </span>

                            </a>
                        </div>

                        <div className="col-12 col-lg-6">
                            <a href="#" className="download-card">

                                <div className="captain-logo">
                                    <img src={logo} alt="Rapido Captain" />
                                    <span>Captain</span>
                                </div>

                                <span>
                                    Drive &amp;<br />
                                    Earn
                                </span>

                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <footer className="footer-section">
                <div className="container">
                    <div className="row footer-row">

                        <div className="col-12 col-md-4 footer-column">

                            <h3>Customer app</h3>

                            <a href="#" className="store-btn">
                                Get it on Google Play
                            </a>

                            <a href="#" className="store-btn">
                                Download on the App Store
                            </a>

                        </div>

                        <div className="col-12 col-md-3 footer-column">

                            <h3>Captain app</h3>

                            <a href="#" className="store-btn">
                                Get it on Google Play
                            </a>

                        </div>

                        <div className="col-12 col-md-2 footer-column">

                            <a href="#">Home</a>
                            <a href="#">About Us</a>
                            <a href="#">Careers</a>
                            <a href="#">Safety</a>
                            <a href="#">Blog</a>
                            <a href="#">Press</a>
                            <a href="#">Privacy Policy</a>

                        </div>

                        <div className="col-12 col-md-3 footer-column">

                            <a href="#">Customer Terms - Bike Taxi</a>
                            <a href="#">Customer Terms - Cabs and Auto</a>
                            <a href="#">Corporate Affairs</a>
                            <a href="#">Captain Terms - Bike Taxi</a>
                            <a href="#">Captain Terms - Cabs and Auto</a>

                        </div>

                    </div>

                    <div className="footer-bottom">
                        <p>
                            &copy; 2026 Roppen Transportation. All rights reserved.
                        </p>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default App
