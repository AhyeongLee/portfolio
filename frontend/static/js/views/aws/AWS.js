import AbstractView from '../AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('AWS');
    }

    getHtml = async () => {
        return `
            <div> This is AWS page </div>
        `;
    }
}