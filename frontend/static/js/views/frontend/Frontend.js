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
                    <p class="project-descriptions">Built using React JS, HTML, CSS, Firebase(Realtime Database, Authentication) and Cloudinary.</p>
                    <p class="project-descriptions">Deployed using Jenkins, Docker, AWS ECS and AWS CodeDeploy.</p>
                    <a class="code-btn" href="https://github.com/AhyeongLee/business-card-maker" target="_blank">Go to Code</a>
                </div>                    
            </article>
            <article class="frontend-article youtube-clone-article">
                <div class="project-info">
                    <a class="image-container" target="_blank" href="https://602f1f4c4b25ab2ffa7fa7e0--trusting-gates-bb8c85.netlify.app/">
                        <img src="./static/images/youtube-clone.png" alt="Youtube Clone">
                    </a>
                    <h1 class="project-name">Youtube Clone</h1>
                    <p class="project-descriptions">Built using React JS, HTML, CSS, Youtube API.</p>
                    <p class="project-descriptions">Deployed using Netlify.</p>
                    <a class="code-btn" href="https://github.com/AhyeongLee/youtube-clone" target="_blank">Go to Code</a>
                </div>                    
            </article>
            <article class="frontend-article">
                <div class="project-info">
                    <a class="image-container" target="_blank" href="https://ahyeonglee.github.io/bouncing-ball/index">
                        <img src="./static/images/bouncing-ball.png" alt="Simple Gallery">
                    </a>
                    <h1 class="project-name">Bouncing Ball</h1>
                    <p class="project-descriptions">Built using Vanilla JS, HTML, CSS</p>
                    <p class="project-descriptions">Deployed using Github.</p>
                    <a class="code-btn" href="https://github.com/AhyeongLee/AhyeongLee.github.io/tree/master/bouncing-ball" target="_blank">Go to Code</a>
                </div>                    
            </article>
            <article class="frontend-article">
                <div class="project-info">
                    <a class="image-container" target="_blank" href="https://ahyeonglee.github.io/3d-card/index">
                        <img src="./static/images/3d-card.png" alt="3D Card">
                    </a>
                    <h1 class="project-name">3D Card</h1>
                    <p class="project-descriptions">Built using Vanilla JS, HTML, CSS</p>
                    <p class="project-descriptions">Deployed using Github.</p>
                    <a class="code-btn" href="https://github.com/AhyeongLee/AhyeongLee.github.io/tree/master/3d-card" target="_blank">Go to Code</a>
                </div>                    
            </article>
            <article class="frontend-article">
                <div class="project-info">
                    <a class="image-container" target="_blank" href="http://simpel-gallery.s3-website.ap-northeast-2.amazonaws.com/">
                        <img src="./static/images/simple-gallery.png" alt="Simple Gallery">
                    </a>
                    <h1 class="project-name">Simple Gallery</h1>
                    <p class="project-descriptions">Built using Vanilla JS, HTML, CSS</p>
                    <p class="project-descriptions">Deployed using S3.</p>
                    <a class="code-btn" href="https://github.com/AhyeongLee/simple-gallery" target="_blank">Go to Code</a>
                </div>                    
            </article>
        </div>
        `;
    }

}