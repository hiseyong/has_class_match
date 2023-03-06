import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Greeting } from "./components/Greeting";
import { NotFound } from "./components/NotFound";
import { Login } from "./components/Login";
import { Resister } from "./components/Resister";
import { Main } from "./components/Main";
import { Introduction } from "./components/Introduction";
import { useState } from "react";
import { TableFill } from "./components/TableFill";
import { Nav } from "./components/Nav";
import { Search } from "./components/Search";
function App() {
  const [logedInUsername, setLogedInUsername] = useState('hiseyong');
  const logging = (val) => {
    setLogedInUsername(val);
  }
  return (
    <div className="Wrapper">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/tablefill/:id" element={<TableFill username={logedInUsername}/>}/>
          <Route path="/login" element={<Login logging={logging} username={logedInUsername}/>}/>
          <Route path="/timetable" element={<Main username={logedInUsername}/>}/>
          <Route path="/introduction" element={<Introduction/>}/>
          <Route path="/resister" element={<Resister/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/" exact={true} element={<Greeting/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
