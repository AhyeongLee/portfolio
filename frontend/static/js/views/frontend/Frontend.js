import AbstractView from '../AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Frontend');
    }

    getHtml = async () => {
        return `
        <article class="skills-article">
            <h1 class="frontend-h1">My Skills</h1>
            <div class="project-skills">
                <div class="circle-box">
                    <div class="skill-container">
                        <h3 class="skill">75%<br>JS</h3>
                        <svg class="gauge-container javascript-gauge-container">
                            <circle class="gauge-border" cx="50" cy="50" r="50"></circle>
                            <circle class="gauge-bar" cx="50" cy="50" r="50"></circle>
                        </svg>
                    </div>
                    <div class="skill-container">
                        <h3 class="skill">75%<br>HTML/CSS</h3>
                        <svg class="gauge-container html-gauge-container">
                            <circle class="gauge-border" cx="50" cy="50" r="50"></circle>
                            <circle class="gauge-bar" cx="50" cy="50" r="50"></circle>
                        </svg>
                    </div>
                </div>
                <div class="circle-box">
                    <div class="skill-container">
                        <h3 class="skill">60%<br>React</h3>
                        <svg class="gauge-container react-gauge-container">
                            <circle class="gauge-border" cx="50" cy="50" r="50"></circle>
                            <circle class="gauge-bar" cx="50" cy="50" r="50"></circle>
                        </svg>
                    </div>
                    <div class="skill-container">
                        <h3 class="skill">30%<br>Webpack</h3>
                        <svg class="gauge-container webpack-gauge-container">
                            <circle class="gauge-border" cx="50" cy="50" r="50"></circle>
                            <circle class="gauge-bar" cx="50" cy="50" r="50"></circle>
                        </svg>
                    </div>
                </div>
                <div class="circle-box">
                    <div class="skill-container">
                        <h3 class="skill">30%<br>Babel</h3>
                        <svg class="gauge-container babel-gauge-container">
                            <circle class="gauge-border" cx="50" cy="50" r="50"></circle>
                            <circle class="gauge-bar" cx="50" cy="50" r="50"></circle>
                        </svg>
                    </div>
                    <div class="skill-container">
                        <h3 class="skill">80%<br>AWS</h3>
                        <svg class="gauge-container aws-gauge-container">
                            <circle class="gauge-border" cx="50" cy="50" r="50"></circle>
                            <circle class="gauge-bar" cx="50" cy="50" r="50"></circle>
                        </svg>
                    </div>
                </div>
                <div class="circle-box">
                    <div class="skill-container">
                        <h3 class="skill">75%<br>Jenkins</h3>
                        <svg class="gauge-container jenkins-gauge-container">
                            <circle class="gauge-border" cx="50" cy="50" r="50"></circle>
                            <circle class="gauge-bar" cx="50" cy="50" r="50"></circle>
                        </svg>
                    </div>
                    <div class="skill-container">
                        <h3 class="skill">30%<br>Docker</h3>
                        <svg class="gauge-container docker-gauge-container">
                            <circle class="gauge-border" cx="50" cy="50" r="50"></circle>
                            <circle class="gauge-bar" cx="50" cy="50" r="50"></circle>
                        </svg>
                    </div>
                </div>
            </div>
        </article>
        <div class="works-container">
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
        </div>
        `;
    }

}