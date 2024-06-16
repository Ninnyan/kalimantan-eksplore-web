import KalimantanSource from "../../data/kalimantanAPI";

const LoginUser = {
    async render() {
        return `
            <login-user></login-user>
        `
    },

    async afterRender() {
        const header = document.querySelector('header')
        if(header === null) {
            return
        } else {
            header.classList.add('hilang')
            const footer = document.querySelector('footer')
            footer.classList.add('hilang')
        }
        const linkBoot = document.querySelector('.linkBoot')
        linkBoot.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css')
        const email = document.querySelector('.emailLogin')
        const password = document.querySelector('.passwordLogin')
        const button = document.querySelector('.loginButton')
        button.addEventListener('click', async (event) => {
            event.stopPropagation()
            const hasil = await KalimantanSource.loginUser({
                email: email.value,
                password: password.value
            })
    
        })
    }
}

export default LoginUser