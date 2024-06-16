import AdminEdit from "../views/pages/adminEdit";
import AktivitasLogin from "../views/pages/aktivitasLogin";
import Dashboard from "../views/pages/dashboard";
import KelolaTiket from "../views/pages/kelolaTiket";
import ProfileAdmin from "../views/pages/profileAdmin";
import RegistrasiAdmin from "../views/pages/registrasiAdmin"
import LoginAdmin from "../views/pages/loginAdmin"
import ManageWisata from "../views/pages/manageWisata";

const routesAdmin = {
    '/registrasi-admin': RegistrasiAdmin,
    '/login-admin': LoginAdmin,
    '/admin-dashboard': Dashboard,
    '/admin-aktivitas-login': AktivitasLogin,
    '/admin-kelola-tiket': KelolaTiket,
    '/admin-profile': ProfileAdmin,
    '/admin-edit': AdminEdit,
    '/admin-manage-wisata': ManageWisata
}


export default routesAdmin