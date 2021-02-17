import AbstractView from '../AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Frontend');
    }

    getHtml = async () => {
        return `
        <h1 class="frontend-h1">My Skills</h1>
        <div class="project-skills">
            <div class="circle-box">
                <div class="skill-container">
                    <h3 class="skill">React</h3>
                    <svg class="gauge-container react-container">
                        <circle class="gauge-border" cx="40" cy="40" r="40"></circle>
                        <circle class="gauge-bar" cx="40" cy="40" r="40"></circle>
                    </svg>
                </div>
                <div class="skill-container">
                    <h3 class="skill">HTML</h3>
                    <svg class="gauge-container html-container">
                        <circle class="gauge-border" cx="40" cy="40" r="40"></circle>
                        <circle class="gauge-bar" cx="40" cy="40" r="40"></circle>
                    </svg>
                </div>
            </div>
            <div class="circle-box">
                <div class="skill-container">
                    <h3 class="skill">React</h3>
                    <svg class="gauge-container react-container">
                        <circle class="gauge-border" cx="40" cy="40" r="40"></circle>
                        <circle class="gauge-bar" cx="40" cy="40" r="40"></circle>
                    </svg>
                </div>
                <div class="skill-container">
                    <h3 class="skill">HTML</h3>
                    <svg class="gauge-container html-container">
                        <circle class="gauge-border" cx="40" cy="40" r="40"></circle>
                        <circle class="gauge-bar" cx="40" cy="40" r="40"></circle>
                    </svg>
                </div>
            </div>
            <div class="circle-box">
                <div class="skill-container">
                    <h3 class="skill">React</h3>
                    <svg class="gauge-container react-container">
                        <circle class="gauge-border" cx="40" cy="40" r="40"></circle>
                        <circle class="gauge-bar" cx="40" cy="40" r="40"></circle>
                    </svg>
                </div>
                <div class="skill-container">
                    <h3 class="skill">HTML</h3>
                    <svg class="gauge-container html-container">
                        <circle class="gauge-border" cx="40" cy="40" r="40"></circle>
                        <circle class="gauge-bar" cx="40" cy="40" r="40"></circle>
                    </svg>
                </div>
            </div>
            <div class="circle-box">
                <div class="skill-container">
                    <h3 class="skill">CSS</h3>
                    <svg class="gauge-container css-container">
                        <circle class="gauge-border" cx="40" cy="40" r="40"></circle>
                        <circle class="gauge-bar" cx="40" cy="40" r="40"></circle>
                    </svg>
                </div>
                <div class="skill-container">
                    <h3 class="skill">ETC</h3>
                    <svg class="gauge-container etc-container">
                        <circle class="gauge-border" cx="40" cy="40" r="40"></circle>
                        <circle class="gauge-bar" cx="40" cy="40" r="40"></circle>
                    </svg>
                </div>
            </div>
        </div>
        <h1 class="frontend-h1">My Frontend Works</h1>
        <article class="frontend-article card-maker-article">
            <div class="project-info">
                <a class="image-container" target="_blank" href="https://aylee.shop">
                    <img src="./static/images/card-maker.png" alt="Business card maker">
                </a>
                <h1 class="project-name">Business Card Maker</h1>
                <p class="project-descriptions">Built using React, Realtime Database and Authentication of Firebase, Cloudinary.</p>
                <p class="project-descriptions">Deployed using Jenkins, Docker, AWS ECS and AWS CodeDeploy.</p>
                <a class="code-btn" href="https://github.com/AhyeongLee/business-card-maker" target="_blank">Go to Code</a>
            </div>                    
            
        </article>
        `;
    }

}