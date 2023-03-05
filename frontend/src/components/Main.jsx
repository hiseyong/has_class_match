import { Link } from "react-router-dom";
import { useState } from "react";
import '../css/table.css'
export function Main(props) {
    const [owner, setOwner] = useState('')
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
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <br/>
                    <span className="table">2교시</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <br/>
                    <span className="table">3교시</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <br/>
                    <span className="table">4교시</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <br/>
                    <span className="table">5교시</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <br/>
                    <span className="table">6교시</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <br/>
                    <span className="table">7교시</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                    <span className="table">-</span>
                </center>
                
            </div>
        )
    }
    
}