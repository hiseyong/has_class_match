import { Link } from "react-router-dom"

export function Greeting() {
    return(
        <div>
            <center>
               <h1>하나고등학교 시간표 매칭 확인 웹사이트</h1> 
               <span>
                <Link to='/login'>
                    <button>로그인</button>
                </Link>
                <Link to='/resister'>
                    <button>회원가입</button>
                </Link>
                <Link to='/introduction'>
                    <button>설명 보기</button>
                </Link>
               </span>
            </center>
        </div>
    )
}