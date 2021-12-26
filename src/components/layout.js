import React from 'react'
import "./layout.css"
import Header from './header.js'
import Footer from './footer.js'


const Layout = ({children}) => {
return (
    <div>
    <Header></Header>
    <main>{children}</main>
    <Footer></Footer>
    </div>
)

}

export default Layout