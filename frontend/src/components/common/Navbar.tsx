import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="/images/logos/logo.jpeg"
              className="img-fluid"
              alt="ASME Peshawar logo"
              width={70}
              height={70}
              loading="lazy"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav gap-lg-5 mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fs-5 fw-bold" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 fw-bold" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 fw-bold" to="/events">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 fw-bold" to="/wie">
                  WIE
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 fw-bold" to="/our-team">
                  Our Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 fw-bold" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
