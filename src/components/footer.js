import React from 'react'
import { Link } from 'gatsby'


const Header = () => {
return (
    <div className='fixed bottom-0 left-0 w-full'>
    <div className='ml-mob-sides mr-mob-sides mb-[1.4375rem] flex justify-between items-center font-cabinet font-medium text-mob-footer'>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>Tide x Tide 2021</Link>
    </div>
    </div>
)

}

export default Header