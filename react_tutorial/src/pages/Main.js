// import {useState} from "react"
import User from "./User"
import About from "./About"
import Home from "./Home"

// import {Container,Row,Col} from "reactstrap"
import './Mainpage.css'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"


function Main() {
    return(
    <Router>
        <div className="Mainpage">
            <header className="Main-header">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to={
                        {pathname: "/about",
                        state: {
                            from:"root"
                        }
                    }
                        
                    }>About</Link>
                </li>
                <li>
                    <Link to="/user/john/johnson">User</Link>
                </li>
            
            </ul>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/user/:firstname/:lastname" component={User}/>
                </Switch>
            </div>
            </header>       
        </div>
    </Router>
    )
}

export default Main