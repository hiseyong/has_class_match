import { Link } from "react-router-dom";
import '../css/table.css'
export function Main(props) {
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
                    <Link to='/tablefill/1'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/2'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/3'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/4'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/5'>
                        <span className="table">-</span>
                    </Link>
                    <br/>
                    <span className="table">2교시</span>
                    <Link to='/tablefill/6'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/7'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/8'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/9'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/10'>
                        <span className="table">-</span>
                    </Link>
                    <br/>
                    <span className="table">3교시</span>
                    <Link to='/tablefill/11'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/12'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/13'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/14'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/15'>
                        <span className="table">-</span>
                    </Link>
                    <br/>
                    <span className="table">4교시</span>
                    <Link to='/tablefill/16'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/17'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/18'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/19'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/20'>
                        <span className="table">-</span>
                    </Link>
                    <br/>
                    <span className="table">5교시</span>
                    <Link to='/tablefill/21'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/22'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/23'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/24'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/25'>
                        <span className="table">-</span>
                    </Link>
                    <br/>
                    <span className="table">6교시</span>
                    <Link to='/tablefill/26'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/27'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/28'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/29'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/30'>
                        <span className="table">-</span>
                    </Link>
                    <br/>
                    <span className="table">7교시</span>
                    <Link to='/tablefill/31'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/32'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/33'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/34'>
                        <span className="table">-</span>
                    </Link>
                    <Link to='/tablefill/35'>
                        <span className="table">-</span>
                    </Link>
                </center>
                
            </div>
        )
    }
    
}