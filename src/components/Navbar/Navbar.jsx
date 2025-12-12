import { useEffect } from "react";
import { NavLink } from "react-router";

export default function Navbar() {

    function handleScroll(){
        const nav = document.querySelector('nav');
        window.scrollY > 50? nav.classList.add('shrink'): nav.classList.remove('shrink')
    }

    useEffect(()=>{
        const x =handleScroll
        window.addEventListener('scroll' , x )
        return () =>window.removeEventListener('scroll', x)
    },[])
    return (
        <>
            <nav className="navbar fixed-top shadow-sm navbar-expand-lg">
                <div className="container">
                    <NavLink className="navbar-brand logo" to="/">
                        START FRAMEWORK
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="links navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/About">
                                ABOUT
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Portfolio">
                                PORTFOLIO
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Contact">
                                CONTACT
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

