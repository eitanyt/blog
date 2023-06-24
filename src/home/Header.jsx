import { Link, NavLink } from "react-router-dom";
import { Login } from "../login/login";

export function Header(props) {
    const {user} = props
    const userName = user? `${ user.firstName } ${ user.lastName }`: null
    return (
            <header dir="rtl" >
                <ul>
                <li ><NavLink to={'About'} className="menu" >אודות</NavLink></li>
                <li ><NavLink to={'home'} className="menu">מסך הבית</NavLink></li>
                <li ><NavLink to={'Personal'} className="menu">איזור אישי</NavLink></li>
                </ul>
                {user&&<div>{ userName }</div>}
                <div className="login-button"><Link to={'Login'}>התחברות</Link></div>
            </header>
    )
}