import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import './utils/utils-detail/detail-wisata'
import './utils/loginPage/loginAdminRender'
import './utils/loginPage/loginUserRender'
import './utils/registrasiPage/registrasiAdmin'
import './utils/registrasiPage/registrasiUser'
import './utils/registrasiPage/initiator/registrasiAdminInit'
import './utils/homePage/homePageRender'
import './utils/homePage/initiator/homePageInit'
import './utils/homePage/initiator/rekomendasiPageInit'
import './utils/global/globalInit'
import './utils/riwayatPage/riwayatPageRender'
import './utils/riwayatPage/cardRiwayat'
import './utils/aboutUs/aboutUsRender'
import './utils/manageWisata/manageWisataRender'
import './component/footerAdmin'
import './component/navbarAdmin'
import './component/sidebarAdmin'
import './utils/dashboard/initiator/dashboardInit'
import './utils/aktivitasLogin/initiator/aktivitasLoginInit'
import './utils/kelolaTiket/initiator/kelolaTiketInit'
import './utils/adminProfile/initiator/adminProfileInit'
import globalInit from './utils/global/globalInit';

const app = new App({
    body: document.querySelector('main'),
    mainBody: document.querySelector('body')
})


window.addEventListener('DOMContentLoaded', () => {
    
    globalInit._init()
    window.addEventListener('hashchange', () => {
        app.renderPage()
        app.renderPageAdmin()
    })
    window.addEventListener('load', () => {
        app.renderPage()
        app.renderPageAdmin()
    })

})