import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";

class App {
    constructor({body}) {
        this._body = body
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._body.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default App