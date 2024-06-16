import KalimantanSource from "../../data/kalimantanAPI";
import registrasiAdminInit from "../../utils/registrasiPage/initiator/registrasiAdminInit";

const RegistrasiUser = {
    async render() {
        return `
            <register-user></register-user>
        `
    },

    async afterRender() {
        const header = document.querySelector('header')
        header.classList.add('hilang')
        const footer = document.querySelector('footer')
        footer.classList.add('hilang')
        const linkBoot = document.querySelector('.linkBoot')
        linkBoot.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css')
        const phone = document.querySelector('#phone')
        registrasiAdminInit._validation(phone)

        const valueNama = document.querySelector('.nama')
        const valueHp = document.querySelector('.phone')
        const valueGender = document.querySelector('#gender')
        const valueEmail = document.querySelector('.email')
        const valuePassword = document.querySelector('.password')

        const button = document.querySelector('.btn')
        button.addEventListener('click', async (event) => {
            event.stopPropagation()
            const hasil = await KalimantanSource.registerUser({
                nama: valueNama.value,
                email: valueEmail.value,
                password: valuePassword.value,
                gender: valueGender.value,
                telephone: valueHp.value,
            })
        })


    }
}

export default RegistrasiUser