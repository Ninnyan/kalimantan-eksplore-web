import KalimantanSource from '../../data/kalimantanAPI'
import UrlParser from '../../routes/url-parser'
import detailInitiator from '../../utils/utils-detail/initiator/detail-initiator'

const DATA = require('../../data/DATA.json')

const Detail = {
    async render() {
        return `
            <detail-wisata></detail-wisata>
        `
    },

    async afterRender() {
        const linkBoot = document.querySelector('.linkBoot')
        linkBoot.removeAttribute('href')
        const detailWisata = document.querySelector('detail-wisata')
        const url = UrlParser.parseActiveUrlWithoutCombiner()
        const getDetailWisata = await KalimantanSource.detailWisata(url.id)
        if(getDetailWisata === undefined) {
            Swal.fire({
                icon: 'info',
                title: 'Perhatian!',
                text: `Anda tidak bisa memesan, silahkan login terlebih dahulu !`,
              });
        } else {
            const getMap = await KalimantanSource.getMap(getDetailWisata.result.place_id)
            detailWisata._collectData(getDetailWisata.result, getMap)
        }
        detailInitiator._descriptioninit({
            mainDescription: document.querySelector('.description'),
            descriptionDestination: document.querySelector('.description-destination'),
            descriptionButton:  document.querySelector('.description-button'),
            data: getDetailWisata.result
        })

        detailInitiator._ticketInit({
            plusButton: document.querySelector('.plus-button'),
            minusButton: document.querySelector('.minus-button'),
            total: document.querySelector('.total'),
            qty: document.querySelector('.qty'),
            orderTicket: document.querySelector('.order-ticket'),
            data: getDetailWisata.result
        })

        detailInitiator._imageInit({
            image1: document.querySelector('.image-1'),
            image2: document.querySelector('.image-2'),
            image3: document.querySelector('.image-3'),
            containerOpenImage: document.querySelector('.container-open-image'),
            close: document.querySelector('.close'),
            openImage: document.querySelector('.open-image'),
            data: getDetailWisata.result
        })

        detailInitiator._renderPhoto({
            photo1: document.querySelector('.photo1'),
            photo2: document.querySelector('.photo2'),
            photo3: document.querySelector('.photo3'),
            data: getDetailWisata.result
        })

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

export default Detail