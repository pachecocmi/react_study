import React from 'react'
import NavLink from './NavLink'

export default function NavMenu(props) {
    
    let isMobile = props.isMobile!=="false"
    let navClass = `text-blue-500 py-3 md:py-2 lg:py-1 block ${isMobile?"pl-3 border-b":"mr-6"}`

    const navItems = [
        { id:1, name:"home", title:"Home", link:"/" },
        { id:2, name:"about", title:"About", link:"/about" },
        { id:3, name:"products", title:"Products", link:"/products" },
    ]
    const navList = navItems.map(each=>
        <li key={each.id}>
            <NavLink params={each} key={each.id} 
                onClick={props.closeMenu} 
                className={`${navClass}`} 
                isMobile={isMobile}
            />
        </li>
    )

    return (
        <div>
            <div className={`font-bold border-b py-3 mr-6 ${!isMobile?"hidden":""}`}>
                <h3>Menu</h3>
            </div>

            <ul className={!isMobile?"flex":""}>
                {navList}
            </ul>
        </div>
    )
}
