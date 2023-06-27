import { Link, NavLink } from "react-router-dom";

export function Header(props) {
    const {user} = props
    const userName = user? `${ user.firstName } ${ user.lastName }`: null
    return (
            <header dir="rtl" >
                <ul>
                <li ><NavLink to={'home'} className="menu center" >בלוג</NavLink></li>
                <li ><NavLink to={'About'} className="menu center" >אודות</NavLink></li>
                <li ><NavLink to={'Personal'} className="menu center">איזור אישי</NavLink></li>
                </ul>
                <div className="user-and-login">
                {user&&<div>{ userName }</div>}
                <div className="login-button center"><Link to={'Login'}>התחברות</Link></div>
                </div>
            </header>
    )
}