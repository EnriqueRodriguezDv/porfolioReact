import React from 'react';
import logoEnrique from '../assets/static/logoEnrique.png'
import '../assets/style/components/navbar.scss'

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">
                    <img src={logoEnrique}></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarHeader">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#principal">Principal<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#project">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutMe">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#footer">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;