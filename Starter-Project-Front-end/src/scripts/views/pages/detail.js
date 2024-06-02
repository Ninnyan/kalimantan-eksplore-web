const Detail = {
    async render() {
        return `
            <detail></detail>
        `
    },

    async afterRender() {
        console.log('P');
    }
}

export default Detail