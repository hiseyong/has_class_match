import { useNavigate,useLocation } from "react-router";
import { useState, useEffect } from "react";
import axios from 'axios';
export function TableFill(props) {
    const loc = useLocation();
    const client = axios.create()
    
    const [location, setLocation] = useState(loc.pathname.split('/')[1]);

    useEffect(()=>{
        setLocation(loc.pathname.split('/')[2]);
    },[loc.pathname]);

    const navigate = useNavigate()

    if(props.username === '') {
        navigate('/login')
    } else {
        return(
            <span>
                <select name="job">
                    <option value="select">과목선택</option>
                    <option value="korean">국어</option>
                    <option value="english">영어</option>
                    <option value="math">수학</option>
                    <option value="social">통합사회</option>
                    <option value="science">통합과학</option>
                    <option value="pe">체육</option>
                    <option value="music">음악</option>
                    <option value="art">미술</option>
                    <option value="chinese">중국어</option>
                    <option value="japanese">일본어</option>
                    <option value="korhistory">한국사</option>
                    <option value="programming">프로그래밍</option>
                    <option value="philosophy">철학</option>
                </select>
            </span>
        )
    }
}