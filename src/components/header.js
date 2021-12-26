import React from 'react'
import logo from "../images/mob.png"
import burgerClosed from "../images/burger-closed.png"



const Header = () => {
return (
    <div className='h-[7.75rem] flex justify-between items-center ml-mob-sides mr-mob-sides'>

            <img className='h-[3.8125rem]' src={logo} alt="Logo" />
            <img className='h-[0.9375rem]' src={burgerClosed} alt="Logo" />

    </div>
)

}

export default Header