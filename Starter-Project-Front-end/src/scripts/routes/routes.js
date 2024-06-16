import Detail from "../views/pages/detail"
import Home from "../views/pages/home"
import LoginUser from "../views/pages/loginUser"
import RegistrasiUser from "../views/pages/registrasiUser"
import RiwayatPage from "../views/pages/riwayat"
import AboutUs from "../views/pages/about"

const routes = {
    '/': Home,
    '/home': Home,
    '/login-user': LoginUser,
    '/registrasi-user': RegistrasiUser,
    '/riwayat': RiwayatPage,
    '/about-us': AboutUs,
    '/detail/:id': Detail,
}


export default routes