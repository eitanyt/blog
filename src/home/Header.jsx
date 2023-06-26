import { Link, NavLink } from "react-router-dom";

export function Header(props) {
    const {user} = props
    const userName = user? `${ user.firstName } ${ user.lastName }`: null
    return (
            <header dir="rtl" >
                <ul>
                <li ><NavLink to={'home'} className="menu">בלוג</NavLink></li>
                <li ><NavLink to={'About'} className="menu" >אודות</NavLink></li>
                <li ><NavLink to={'Personal'} className="menu">איזור אישי</NavLink></li>
                </ul>
                <div className="user-and-login">
                {user&&<div>{ userName }</div>}
                <div className="login-button"><Link to={'Login'}>התחברות</Link></div>
                </div>
            </header>
    )
}