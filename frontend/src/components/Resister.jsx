import { useState } from "react"

export function Resister() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
            <input placeholder="username" onChange={usernameOnChange}/>
            <input placeholder="password" onChange={passwordOnChange}/>
            <button onClick={onClick}>resister</button>
        </div>
    )
}