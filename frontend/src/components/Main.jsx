import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import '../css/table.css'
export function Main(props) {
    const client = axios.create();
    const [account, setAccount] = useState({
        'username': props.username
    })
    const [table, setTable] = useState([])
    useEffect(()=>{
        setAccount({
            'username': props.username
        })
    },[props.username])

    useEffect(()=> {
        if(account.username != '') {
            client.post('/api/getlist' , {account} )   //axios 기능을 통한 post 사용및 name 값 전달.
        .then(res => {
            setTable(res.data[0].timetable.split(','))
            console.log(res.data[0].timetable.split(','))
        })
        .catch();
        }
        
    },[account.username])
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
                        <span className="table">{table[0]}</span>
                    </Link>
                    <Link to='/tablefill/2'>
                        <span className="table">{table[1]}</span>
                    </Link>
                    <Link to='/tablefill/3'>
                        <span className="table">{table[2]}</span>
                    </Link>
                    <Link to='/tablefill/4'>
                        <span className="table">{table[3]}</span>
                    </Link>
                    <Link to='/tablefill/5'>
                        <span className="table">{table[4]}</span>
                    </Link>
                    <br/>
                    <span className="table">2교시</span>
                    <Link to='/tablefill/6'>
                        <span className="table">{table[5]}</span>
                    </Link>
                    <Link to='/tablefill/7'>
                        <span className="table">{table[6]}</span>
                    </Link>
                    <Link to='/tablefill/8'>
                        <span className="table">{table[7]}</span>
                    </Link>
                    <Link to='/tablefill/9'>
                        <span className="table">{table[8]}</span>
                    </Link>
                    <Link to='/tablefill/10'>
                        <span className="table">{table[9]}</span>
                    </Link>
                    <br/>
                    <span className="table">3교시</span>
                    <Link to='/tablefill/11'>
                        <span className="table">{table[10]}</span>
                    </Link>
                    <Link to='/tablefill/12'>
                        <span className="table">{table[11]}</span>
                    </Link>
                    <Link to='/tablefill/13'>
                        <span className="table">{table[12]}</span>
                    </Link>
                    <Link to='/tablefill/14'>
                        <span className="table">{table[13]}</span>
                    </Link>
                    <Link to='/tablefill/15'>
                        <span className="table">{table[14]}</span>
                    </Link>
                    <br/>
                    <span className="table">4교시</span>
                    <Link to='/tablefill/16'>
                        <span className="table">{table[15]}</span>
                    </Link>
                    <Link to='/tablefill/17'>
                        <span className="table">{table[16]}</span>
                    </Link>
                    <Link to='/tablefill/18'>
                        <span className="table">{table[17]}</span>
                    </Link>
                    <Link to='/tablefill/19'>
                        <span className="table">{table[18]}</span>
                    </Link>
                    <Link to='/tablefill/20'>
                        <span className="table">{table[19]}</span>
                    </Link>
                    <br/>
                    <span className="table">5교시</span>
                    <Link to='/tablefill/21'>
                        <span className="table">{table[20]}</span>
                    </Link>
                    <Link to='/tablefill/22'>
                        <span className="table">{table[21]}</span>
                    </Link>
                    <Link to='/tablefill/23'>
                        <span className="table">{table[22]}</span>
                    </Link>
                    <Link to='/tablefill/24'>
                        <span className="table">{table[23]}</span>
                    </Link>
                    <Link to='/tablefill/25'>
                        <span className="table">{table[24]}</span>
                    </Link>
                    <br/>
                    <span className="table">6교시</span>
                    <Link to='/tablefill/26'>
                        <span className="table">{table[25]}</span>
                    </Link>
                    <Link to='/tablefill/27'>
                        <span className="table">{table[26]}</span>
                    </Link>
                    <Link to='/tablefill/28'>
                        <span className="table">{table[27]}</span>
                    </Link>
                    <Link to='/tablefill/29'>
                        <span className="table">{table[28]}</span>
                    </Link>
                    <Link to='/tablefill/30'>
                        <span className="table">{table[29]}</span>
                    </Link>
                    <br/>
                    <span className="table">7교시</span>
                    <Link to='/tablefill/31'>
                        <span className="table">{table[30]}</span>
                    </Link>
                    <Link to='/tablefill/32'>
                        <span className="table">{table[31]}</span>
                    </Link>
                    <Link to='/tablefill/33'>
                        <span className="table">{table[32]}</span>
                    </Link>
                    <Link to='/tablefill/34'>
                        <span className="table">{table[33]}</span>
                    </Link>
                    <Link to='/tablefill/35'>
                        <span className="table">{table[34]}</span>
                    </Link>
                </center>
                
            </div>
        )
    }
    
}