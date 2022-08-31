import './navbar.css';
import CartWidget from './cartWidget';

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand logoStyle" href="#">GameLogSotore</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Consolas
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Nintendo</a></li>
                                    <li><a className="dropdown-item" href="#">PlaySatation</a></li>
                                    <li><a className="dropdown-item" href="#">Xbox</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Juegos
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Nintendo</a></li>
                                    <li><a className="dropdown-item" href="#">PlaySatation</a></li>
                                    <li><a className="dropdown-item" href="#">Xbox</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Accesorios
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Nintendo</a></li>
                                    <li><a className="dropdown-item" href="#">PlaySatation</a></li>
                                    <li><a className="dropdown-item" href="#">Xbox</a></li>
                                    <li><a className="dropdown-item" href="#">PC</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    PC y Notebooks
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">i7</a></li>
                                    <li><a className="dropdown-item" href="#">i5</a></li>
                                    <li><a className="dropdown-item" href="#">i3</a></li>
                                    <li><a className="dropdown-item" href="#">i9</a></li>
                                </ul>
                            </li>
                        </ul>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;