import { Link } from "react-router-dom";
import '../css/table.css'
export function Main() {
    let localStorage = window.localStorage;
    return(
        <div>
            <Link to='/timetableallset'>
                <button>시간표 전체설정</button>
            </Link>
            <Link to='/timetableselectset'>
                <button>시간표 선택설정</button>
            </Link>
            <hr/>
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