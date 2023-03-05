import { useState } from "react";
import { useNavigate } from 'react-router';
import '../css/table.css'
export function Main(props) {
    const navigate = useNavigate() 
    const [owner, setOwner] = useState('')
    const onClick = (e) => {
        console.log(e.target.name)
        navigate(`/tablefill/${e.target.name}`)
    }
    if(props.username === '') {
        return(
            <h1>로그인되지 않았습니다.</h1>
        )
    } else {
        return(
            <div>
                <h1></h1>
                <h2>각 칸을 선택하여 시간표 설정, 수정 가능</h2>
                <center>
                    <span className="table">교시\요일</span>
                    <span className="table">월</span>
                    <span className="table">화</span>
                    <span className="table">수</span>
                    <span className="table">목</span>
                    <span className="table">금</span>
                    <br/>
                    <span className="table">1교시</span>
                    <span className="table" onClick={onClick} name="1">-</span>
                    <span className="table" onClick={onClick} name="2">-</span>
                    <span className="table" onClick={onClick} name="3">-</span>
                    <span className="table" onClick={onClick} name="4">-</span>
                    <span className="table" onClick={onClick} name="5">-</span>
                    <br/>
                    <span className="table">2교시</span>
                    <span className="table" onClick={onClick} name="6">-</span>
                    <span className="table" onClick={onClick} name="7">-</span>
                    <span className="table" onClick={onClick} name="8">-</span>
                    <span className="table" onClick={onClick} name="9">-</span>
                    <span className="table" onClick={onClick} name="10">-</span>
                    <br/>
                    <span className="table">3교시</span>
                    <span className="table" onClick={onClick} name="11">-</span>
                    <span className="table" onClick={onClick} name="12">-</span>
                    <span className="table" onClick={onClick} name="13">-</span>
                    <span className="table" onClick={onClick} name="14">-</span>
                    <span className="table" onClick={onClick} name="15">-</span>
                    <br/>
                    <span className="table">4교시</span>
                    <span className="table" onClick={onClick} name="16">-</span>
                    <span className="table" onClick={onClick} name="17">-</span>
                    <span className="table" onClick={onClick} name="18">-</span>
                    <span className="table" onClick={onClick} name="19">-</span>
                    <span className="table" onClick={onClick} name="20">-</span>
                    <br/>
                    <span className="table">5교시</span>
                    <span className="table" onClick={onClick} name="21">-</span>
                    <span className="table" onClick={onClick} name="22">-</span>
                    <span className="table" onClick={onClick} name="23">-</span>
                    <span className="table" onClick={onClick} name="24">-</span>
                    <span className="table" onClick={onClick} name="25">-</span>
                    <br/>
                    <span className="table">6교시</span>
                    <span className="table" onClick={onClick} name="26">-</span>
                    <span className="table" onClick={onClick} name="27">-</span>
                    <span className="table" onClick={onClick} name="28">-</span>
                    <span className="table" onClick={onClick} name="29">-</span>
                    <span className="table" onClick={onClick} name="30">-</span>
                    <br/>
                    <span className="table">7교시</span>
                    <span className="table" onClick={onClick} name='31'>-</span>
                    <span className="table" onClick={onClick} name='32'>-</span>
                    <span className="table" onClick={onClick} name='33'>-</span>
                    <span className="table" onClick={onClick} name='34'>-</span>
                    <span className="table" onClick={onClick} name='35'>-</span>
                </center>
                
            </div>
        )
    }
    
}