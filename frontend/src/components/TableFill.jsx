import { useNavigate,useLocation } from "react-router";
import { useState, useEffect } from "react";
import axios from 'axios';
export function TableFill(props) {
    const loc = useLocation();
    const client = axios.create()
    
    const [location, setLocation] = useState(loc.pathname.split('/')[1]);
    const [subject, setSubject] = useState('select')

    useEffect(()=>{
        setLocation(loc.pathname.split('/')[2]);
    },[loc.pathname]);

    const onChange = (e) => {
        setSubject(e.target.value)
        console.log(e.target.value)
    }

    const navigate = useNavigate()

    if(props.username === '') {
        navigate('/login')
    } else {
        return(
            <span>
                <select name="job">
                    <option value="select" onChange={onChange}>과목선택</option>
                    <option value="korean" onChange={onChange}>국어</option>
                    <option value="english" onChange={onChange}>영어</option>
                    <option value="math" onChange={onChange}>수학</option>
                    <option value="social" onChange={onChange}>통합사회</option>
                    <option value="science" onChange={onChange}>통합과학</option>
                    <option value="pe" onChange={onChange}>체육</option>
                    <option value="music" onChange={onChange}>음악</option>
                    <option value="art" onChange={onChange}>미술</option>
                    <option value="chinese" onChange={onChange}>중국어</option>
                    <option value="japanese" onChange={onChange}>일본어</option>
                    <option value="korhistory" onChange={onChange}>한국사</option>
                    <option value="programming" onChange={onChange}>프로그래밍</option>
                    <option value="philosophy" onChange={onChange}>철학</option>
                </select>
                <button id="tablefilling">반영</button>
            </span>
        )
    }
}