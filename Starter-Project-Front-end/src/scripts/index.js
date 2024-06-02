import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';

const app = new App({
    body: document.querySelector('main')
})

window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('hashchange', () => {
        app.renderPage()
    })
    window.addEventListener('load', () => {
        app.renderPage()
    })
})