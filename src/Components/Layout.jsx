import MainNavbar from "./MainNavbar/MainNavbar";
import Fotter from "./Fotter/Fotter";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
    <MainNavbar />
    <Outlet />
    <Fotter />
    </>
  )
}

export default Layout;