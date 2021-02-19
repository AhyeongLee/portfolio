import AbstractView from '../AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Frontend');
    }

    getHtml = async () => {
        return fetch('https://d6cibru4nqeka.cloudfront.net/html/frontend.html')
        .then((response) => {
            return response.text();
        });
    }

}