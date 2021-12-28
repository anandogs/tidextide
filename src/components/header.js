import React, { useState }from 'react'
import logo from "../images/mob.png"
import burgerClosed from "../images/burger-closed.png"
import { Link } from 'gatsby'



const Header = () => {
    const [open, setOpen] = useState(false)
    return (
    
    <div className='fixed top-0 left-0 right-0  bg-white'>
    <div className='h-[7.75rem] flex justify-between items-center ml-mob-sides mr-mob-sides'>
            <Link to='/'>
            <img className='h-[3.8125rem]' src={logo} alt="Logo" />
            </Link>
            <img className='h-[0.9375rem]' src={burgerClosed} alt="Logo" onClick={()=>setOpen(!open)}/>  
    </div>
    <DropDown menuIsOpen={open}>
                <DropDownItem menuItem='Work' linkTo='/'></DropDownItem>
                <DropDownItem menuItem='About' linkTo='/about'></DropDownItem>
                <DropDownItem menuItem='Contact' linkTo='/contact'></DropDownItem>
                <div className='h-screen'/>
    </DropDown>
    </div>
    
)

}

const DropDown = (props) => {


    return (
        <nav className='absolute top-[7.75rem] w-full bg-white'>
            
                { props.menuIsOpen && props.children }
            
        </nav>
    );
};

const DropDownItem = (props) => {
    return (
        <ul className='ml-mob-sides mr-mob-sides '>
            <li className='block font-cabinet font-medium text-mobile mb-mob-work text-left'>
            <Link to={props.linkTo}>{props.menuItem}</Link>
            </li>
        </ul>
    );
};

export default Header