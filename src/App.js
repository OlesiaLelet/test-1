
import './App.css';
import Main from './Components/Main/Main.jsx';
import Diary from './Components/Diary/Diary.jsx';
import Login from './Components/Login/Login.jsx';
import Header from './Components/Header/Header.jsx';
import Edit from './Components/Edit/Edit.jsx';
import Logout from './Components/Logout/Logout.jsx';
import ProtectedRoutes from './utilits/protectedRoutes.js';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const paths =
  {
    main: "/",
    login: "/login",
    diary: "/diaryOfEmotions",
    edit: '/edit/:id',
    logOut:'/logOut',
    
  }
  

          

function App() {

  const isLogged = useSelector((state) => ( state.diaryPages.isLoggedIn));
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header isLoggedIn={isLogged}/>
        <Routes>
        {!isLogged &&(
         <Route path={paths.login} element={<Login/>}></Route>
)}
         
          
          
          <Route element={<ProtectedRoutes/>}>
          <Route path={paths.login} element={<Navigate to={paths.logOut}/>}></Route>
             <Route path={paths.diary} element={<Diary/>}></Route>
             <Route path={paths.main} element={<Main/>}></Route>
             <Route path={paths.edit} element={<Edit/>}></Route>
             <Route path={paths.logOut} element={<Logout/>}></Route>
          </Route>
         
        </Routes>

      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
