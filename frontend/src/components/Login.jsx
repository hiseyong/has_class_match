import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';
export function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const send =()=>{
        const client = axios.create();   // axios 기능생성
        client.post('/api/login' , {username} )   //axios 기능을 통한 post 사용및 name 값 전달.
        .then(res => {
          if (res.data === 0) {
            alert("wrong username")
          } else if (res.data === 2) {
            alert("wrong password")
          } else if(res.data === 1) {
            props.logging(username)
            navigate('/timetable')
          }
        })
        .catch();
      }
    const usernameOnChange = (e) => {
        setUsername(e.target.value)
    }

    const passwordOnChange = (e) => {
        setPassword(e.target.value)
    }

    const onClick = () => {
        console.log(username, ',', password)
        send()
    }
    return(
        <div>
            <input placeholder="username" onChange={usernameOnChange}/>
            <input placeholder="password" onChange={passwordOnChange}/>
            <button onClick={onClick}>login</button>
        </div>
    )
}