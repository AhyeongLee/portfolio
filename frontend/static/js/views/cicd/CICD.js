import AbstractView from '../AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('CICD');
    }

    getHtml = async () => {
        return `
            <div> This is CI/CD page </div>
        `;
    }
}