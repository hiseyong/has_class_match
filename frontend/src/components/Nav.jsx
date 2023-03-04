import { Link, useLocation } from "react-router-dom";
import '../css/nav.css';
import { useState, useEffect } from 'react';

export function Nav() {
    const loc = useLocation();
    const [active, setActive] = useState(loc.pathname.split('/')[1]);
    useEffect(()=>{
        setActive(loc.pathname.split('/')[1]);
    },[loc.pathname])
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <h1 className={`btn ${active === '' ? 'active' : ''}`} onClick={() => setActive('timetable')}>Main</h1>
                    </Link>
                </li>
                <li>
                    <Link to="search">
                        <h1 className={`btn ${active === 'signin' ? 'active' : ''}`} onClick={() => setActive('search')}>Search</h1>
                    </Link>
                </li>
                <li>
                    <Link to="resister">
                        <h1 className={`btn ${active === 'signup' ? 'active' : ''}`} onClick={() => setActive('resister')}>Resister</h1>
                    </Link>
                </li>
                <li>
                    <Link to="login">
                        <h1 className={`btn ${active === 'document' ? 'active' : ''}`} onClick={() => setActive('login')}>Login</h1>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}