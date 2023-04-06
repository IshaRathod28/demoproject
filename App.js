import Registration from './components/Registration';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter ,Routes, Route, Link } from 'react-router-dom';  
import Chats from './components/Chats';
import Calls from './components/Calls';
import Status from './components/Status';
import Login from './components/Login';
 
function App() {
  return (
    <>
    <div className="App">
<BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav/>}></Route>
          <Route path="/chats" element={<Chats/>}></Route>
          <Route path="/calls" element={<Calls/>}></Route>
          <Route path="/status" element={<Status/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
          <Route path="registration"  element={<Registration/>}
          ></Route>

        </Routes>
  </BrowserRouter>
 
    </div>  
</>
  );
}
export default App;
