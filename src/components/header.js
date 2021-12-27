import React from 'react'
import logo from "../images/mob.png"
import burgerClosed from "../images/burger-closed.png"
import { Link } from 'gatsby'



const Header = () => {
return (
    <div className='h-[7.75rem] flex justify-between items-center ml-mob-sides mr-mob-sides'>
            <Link to='/'>
            <img className='h-[3.8125rem]' src={logo} alt="Logo" />
            </Link>
            <img className='h-[0.9375rem]' src={burgerClosed} alt="Logo" />

    </div>
)

}

export default Header