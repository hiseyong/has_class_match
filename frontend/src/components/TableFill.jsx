import { useNavigate } from "react-router";

export function TableFill(props) {
    const navigate = useNavigate()
    if(props.username === '') {
        navigate('/login')
    } else {
        return(
            <div>
                tablefill
            </div>
        )
    }
}