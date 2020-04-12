import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <span class="navbar-brand text-light">Header</span>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link text-light" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-light" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-light" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;