import KalimantanSource from "../../data/kalimantanAPI";
import globalInit from "../../utils/global/globalInit";
import homePageInit from "../../utils/homePage/initiator/homePageInit";
import rekomendasiInit from "../../utils/homePage/initiator/rekomendasiPageInit";

const Home = {
    async render() {

        return `
            <home-page></home-page>
        `
    },

    async afterRender() {
        const header = document.querySelector('header')
            header.classList.remove('hilang')
            const footer = document.querySelector('footer')
            footer.classList.remove('hilang')
            const linkBoot = document.querySelector('.linkBoot')
            linkBoot.removeAttribute('href')
        const data = await KalimantanSource.dataAllWisata()
        homePageInit.data(data.result)
        rekomendasiInit.data(data.result)

        homePageInit.searchInit()
        
        document.querySelector('.prev').addEventListener('click', () => rekomendasiInit.moveSlide(-1))
        document.querySelector('.next').addEventListener('click', () => rekomendasiInit.moveSlide(1))

        document.getElementById('exploreButton').addEventListener('click', function() {
            document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
        });

        $('.carousel').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            arrows: false,
        });
        const logout = document.querySelector('.logout-all')

        if (logout === null) {
            return
        } else {
            logout.addEventListener('click', (event) => {
                event.stopPropagation()
                KalimantanSource.logoutUser()
            })
        }


    }
}

export default Home