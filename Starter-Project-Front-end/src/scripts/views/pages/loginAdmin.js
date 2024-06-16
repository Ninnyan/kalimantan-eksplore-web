import KalimantanSource from "../../data/kalimantanAPI";

const LoginAdmin = {
    async renderAdmin() {
        return `
            <main>
                <login-admin></login-admin>
            </main>
        `
    },

    async afterRenderAdmin() {
        const linkBoot = document.querySelector('.linkBoot')
        linkBoot.removeAttribute('href')
        const email = document.querySelector('.emailLogin')
        const password = document.querySelector('.passwordLogin')
        const button = document.querySelector('.loginButton')
        button.addEventListener('click', async (event) => {
            event.stopPropagation()
            const hasil = await KalimantanSource.loginAdmin({
                email: email.value,
                password: password.value
            })
        })
    }
}

export default LoginAdmin