import React from "react"
import { Link } from "react-router-dom"
import './navigation.css'
function Navigation() {
    return (
        <div className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/myCart">My cart</Link></li>
                <li><Link to="/cart">Cart</Link> </li>
            </ul>
        </div>

    )
}

export default Navigation;