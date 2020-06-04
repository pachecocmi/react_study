import React from 'react'
import { Link } from 'react-router-dom'


export default function NavMenu(props) {

    let navClass = "text-blue-500 py-3 border-b block";

    return (
        <div>
            <div className="font-bold border-b py-5">
                <h3>Menu</h3>
            </div>

            <ul>
                <li><Link to="/" className={navClass} onClick={props.closeMenu}>Home</Link></li>
                <li><Link to="/about" className={navClass} onClick={props.closeMenu}>About</Link></li>
            </ul>
        </div>
    )
}
