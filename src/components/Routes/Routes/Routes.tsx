import { App } from '../../App';
import { Routes, Route, Navigate, Link} from "react-router-dom"
import { Profile, Todos, Header, TodoById, NotFound } from '../index';

import { useState } from "react"



export const RoutesComponent = () => {
  const [isAuth, setIsAuth] = useState(true)

  return (
    <div>
      <Header/> 
      <Routes>
        <Route path="" element={<App />} />
        <Route path="tasks/:id" element={<TodoById />} />
        <Route path="/tasks" element={<Todos />} />
        <Route path="/profile" element={ isAuth ? <Profile /> : <Navigate to="/login"/> } />
        {/* <Route path="/login" element={<Button onClick={() => setIsAuth(true)}>Войти</Button>} /> */}
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </div>
  );
};
