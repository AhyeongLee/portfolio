import AbstractView from '../AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Frontend');
    }

    getHtml = async () => {
        return `
            <div> This is Front-end page </div>
        `;
    }
}