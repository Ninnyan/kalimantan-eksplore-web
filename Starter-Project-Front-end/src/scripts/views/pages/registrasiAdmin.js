import KalimantanSource from "../../data/kalimantanAPI";
import registrasiAdminInit from "../../utils/registrasiPage/initiator/registrasiAdminInit";

const RegistrasiAdmin = {
    async renderAdmin() {
        return `
            <main>
                <register-admin></register-admin>
            </main>
        `
    },

    async afterRenderAdmin() {
        const linkBoot = document.querySelector('.linkBoot')
        linkBoot.removeAttribute('href')
        const phone = document.querySelector('#phone')
        registrasiAdminInit._validation(phone)
        const valueNama = document.querySelector('.nama')
        const valueHp = document.querySelector('.phone')
        const valueGender = document.querySelector('#gender')
        const valueEmail = document.querySelector('.email')
        const valuePassword = document.querySelector('.password')
        const valueKeyAdmin = document.querySelector('.admin')

        const button = document.querySelector('.registerBt')
        button.addEventListener('click', async (event) => {
            event.stopPropagation()
            const hasil = await KalimantanSource.registerAdmin({
                nama: valueNama.value,
                email: valueEmail.value,
                password: valuePassword.value,
                gender: valueGender.value,
                telephone: valueHp.value,
                admin_key: valueKeyAdmin.value
            })
        })

    }
}

export default RegistrasiAdmin