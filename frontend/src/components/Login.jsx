import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';
export function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    Navigate = useNavigate('/timetable')
    const send =()=>{
        const client = axios.create();   // axios 기능생성
        const name = value;   
        client.post('/api/login' , {name} )   //axios 기능을 통한 post 사용및 name 값 전달.
        .then(res => {
          if (res.data === 0) {
            alert("wrong username")
          } else if (res.data === 2) {
            alert("wrong password")
          } else if(res.data === 1) {
            props.logging(username)
            nav
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
    }
    return(
        <div>
            <input placeholder="username"/>
            <input placeholder="password"/>
            <button>login</button>
        </div>
    )
}