import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Carrito from './Carrito'


function Layout() {
    return (
        <>
            <Header carritoComponent={<Carrito />} />
            <Outlet/>
            <Footer />
        </>
    )
}

export default Layout
