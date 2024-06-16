import routes from "../routes/routes";
import routesAdmin from "../routes/routesAdmin";
import UrlParser from "../routes/url-parser";

class App {
    constructor({body, mainBody}) {
        this._body = body
        this._mainBody = mainBody
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        if(page === undefined) {
            return
        } else {
            this._body.innerHTML = await page.render();
            await page.afterRender();
        }
    }

    async renderPageAdmin() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routesAdmin[url];
        if(page === undefined) {
            return
        } else {
            this._mainBody.innerHTML = await page.renderAdmin();
            await page.afterRenderAdmin();
        }
    }
}

export default App