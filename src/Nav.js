import React, { useEffect, useState } from 'react'
import './nav.css'
export default function Nav() {
    const[show,setShow]=useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>200){setShow(true)}
                else{setShow(false)}
        });
        return ()=>{window.removeEventListener("scroll")}
    },[])
    return (
        <div className={`nav `+`${show&&"nav__black"}`}>
            <img className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo"/>
            <img className='nav__user-logo' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user profile pic"/>
            
        </div>
    )
}
