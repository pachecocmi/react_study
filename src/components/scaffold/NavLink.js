import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavLink(props) {
    // let isActive = this.context.router.route.location.pathname === this.props.to;
    // let className = isActive ? 'active' : '';
    let params = props.params;
    let location = useLocation().pathname;
    let activeNav = `font-bold border-blue-500 ${props.isMobile?"border-r-4":"border-b-2"}`
    
    return <Link to={params.link} 
        className={`${props.className} ${params.link==location?activeNav:""}`}
        onClick={props.closeMenu}
    >{params.title}</Link>
}
