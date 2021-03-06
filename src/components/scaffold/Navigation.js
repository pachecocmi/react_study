import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'

import NavMenu from './NavMenu'

export default function Navigation() {
    const [showMenu, setShowMenu] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    

    const maskTransition = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menuTransition = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    window.addEventListener("resize", ()=>{
        setWindowWidth(window.innerWidth)
    })

    
    if( windowWidth > 750 )
        return (
            <nav>
                <NavMenu isMobile="false"/>
            </nav>
        )
    else
        return (
            <nav>

                <span className="text-xl">
                    <FontAwesomeIcon icon={faBars} 
                        onClick={()=>setShowMenu(!showMenu)}
                    />
                </span>

                {
                    maskTransition.map(({ item, key, props }) =>
                        item && <animated.div 
                            key={key} style={props} 
                            onClick={()=>{setShowMenu(false)}}
                            className="w-full h-full z-40 bg-black-t-50 fixed top-0 left-0"
                        ></animated.div>
                    )

                }

                {
                    menuTransition.map(({ item, key, props }) =>
                        item && <animated.div 
                            key={key} style={props} 
                            className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
                        >
                            <NavMenu isMobile="true" closeMenu={()=>setShowMenu(false)}/>
                        </animated.div>
                    )

                }
            </nav>
        )
}
