import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
export function Resister() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [account, setAccount] = useState({
        'username': '',
        'password': ''
    })

    useEffect(()=>{
        setAccount({
            'username': username,
            'password': password
        })
    },[username, password])
    const usernameOnChange = (e) => {
        setUsername(e.target.value)
    }

    const passwordOnChange = (e) => {
        setPassword(e.target.value)
    }

    const onClick = () => {
        console.log(username, ',', password)
        const client = axios.create();   // axios 기능생성
        client.post('http://localhost:3000/api/resister' , {account} )   //axios 기능을 통한 post 사용및 name 값 전달.
        .then(res => {
            console.log(res.data)
          if (res.data === true) {
            navigate('/login')
          } else if (res.data === false) {
            alert("다른 아이디를 사용하십시오.")
          }
        })
        .catch();
    }
    return(
        <div>
            <input placeholder="username" onChange={usernameOnChange}/>
            <input placeholder="password" onChange={passwordOnChange}/>
            <button onClick={onClick}>resister</button>
        </div>
    )
}