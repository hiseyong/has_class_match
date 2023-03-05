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
                        <h1 className={`btn ${active === '' ? 'active' : ''}`} onClick={() => setActive('')}>Main</h1>
                    </Link>
                </li>
                <li>
                    <Link to="timetable">
                        <h1 className={`btn ${active === 'timetable' ? 'active' : ''}`} onClick={() => setActive('timetable')}>Mypage</h1>
                    </Link>
                </li>
                <li>
                    <Link to="search">
                        <h1 className={`btn ${active === 'search' ? 'active' : ''}`} onClick={() => setActive('search')}>Search</h1>
                    </Link>
                </li>
                <li>
                    <Link to="resister">
                        <h1 className={`btn ${active === 'resister' ? 'active' : ''}`} onClick={() => setActive('resister')}>Resister</h1>
                    </Link>
                </li>
                <li>
                    <Link to="login">
                        <h1 className={`btn ${active === 'login' ? 'active' : ''}`} onClick={() => setActive('login')}>Login</h1>
                    </Link>
                </li>
                <li>
                    <Link to="introduction">
                        <h1 className={`btn ${active === 'introduction' ? 'active' : ''}`} onClick={() => setActive('introduction')}>Introduction</h1>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}