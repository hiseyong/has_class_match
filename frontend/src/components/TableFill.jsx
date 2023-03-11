import { useNavigate,useLocation } from "react-router";
import { useState, useEffect } from "react";
import axios from 'axios';

export function TableFill(props) {
    const loc = useLocation();
    const client = axios.create()
    const [account, setAccount] = useState(props.username)
    const [location, setLocation] = useState(loc.pathname.split('/')[1]);
    const [subject, setSubject] = useState('select')
    const tableList = props.tableList

    useEffect(()=>{
        setLocation(loc.pathname.split('/')[2]);
    },[loc.pathname]);

    useEffect(() => {
        setAccount(props.username)
    }, [props.username])

    const onChange = (e) => {
        setSubject(e.target.value)
    }

    const onClick = () => {
        if(subject === 'select') {
            alert('과목을 선택하세요')
        } else {
            tableList[location] = subject
            .then(
                client.post('/api/tablefill', {tableList, account})
            )
        }
    }

    const navigate = useNavigate()

    if(props.username === '') {
        navigate('/login')
    } else {
        return(
            <span>
                <select name="job" onChange={onChange}>
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
                <button id="tablefilling" onClick={onClick}>반영</button>
            </span>
        )
    }
}