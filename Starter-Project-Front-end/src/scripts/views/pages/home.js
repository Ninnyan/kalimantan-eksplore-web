const Home = {
    async render() {
        return `
            <a href="#/detail/6c7bqjgi84kcowlqdz">SSS</a>
        `
    },

    async afterRender() {
        console.log('P');
    }
}

export default Home