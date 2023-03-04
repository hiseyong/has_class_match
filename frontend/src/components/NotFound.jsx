import { Link } from "react-router-dom"

export function NotFound() {
    return(
        <div>
            <h1>ERR 404</h1>
            <h2>url is wrong</h2>
            <Link to='/'>
                <h3>Get to main page</h3>
            </Link>
        </div>
    )
}