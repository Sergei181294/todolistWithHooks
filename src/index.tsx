import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import { TodoById, NotFound, Todos, Profile, Header } from './pages';
import { Button } from "./components/common/button"
import { useState } from "react"



const Component = () => {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="" element={<App />} />
        <Route path="tasks/:id" element={<TodoById />} />
        <Route path="tasks" element={<Todos />} />
        {isAuth && <Route path="profile" element={<Profile />} />}
        <Route path="login" element={<Button onClick={() => setIsAuth(true)}>Войти</Button>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <Router>
      <Component />
    </Router>
  );
