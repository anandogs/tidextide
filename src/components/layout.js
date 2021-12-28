import React from 'react'
import "./layout.css"
import Header from './header.js'
import Footer from './footer.js'


const Layout = ({children}) => {
return (
    <div>
    <Header></Header>
    <main className='mb-[4rem] mt-[7.75rem]'>{children}</main>
    <Footer></Footer>
    </div>
)

}

export default Layout