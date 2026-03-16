import { Link } from "react-router-dom"
import { useState } from "react"

function Header({ darkMode, setDarkMode }) {
    return (<>
        <header className="">
            <nav className={`navbar navbar-expand-lg border-bottom ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Sistema Escolar <i className="bi bi-cup-hot ms-1"></i></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll" aria-controls="navbarScroll"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><i className="bi bi-house me-1"></i> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/alunos"><i className="bi bi-person me-1"></i> Alunos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/biblioteca"><i className="bi bi-book me-1"></i>  Biblioteca</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>)
}

export default Header