import { useNavigate,useLocation } from "react-router";
import { useState, useEffect } from "react";
export function TableFill(props) {
    const loc = useLocation();
    const [location, setLocation] = useState(loc.pathname.split('/')[1]);

    useEffect(()=>{
        setLocation(loc.pathname.split('/')[2]);
    },[loc.pathname]);

    const navigate = useNavigate()

    if(props.username === '') {
        navigate('/login')
    } else {
        return(
            <div>
                You are filling number{location}
            </div>
        )
    }
}