import { Link } from "react-router-dom"
import { useState } from "react"
import { Profile } from "../Profile"
import { Button } from "../../common/button"

export const Header = () => {

       const [isAuth, setIsAuth] = useState(false)
       return (
              <header>
                     <Link to="/">Main</Link>
                     {isAuth ? <Profile/> : <Button onClick={() => setIsAuth(true)}>Войти</Button> }
              </header>
       )

}
