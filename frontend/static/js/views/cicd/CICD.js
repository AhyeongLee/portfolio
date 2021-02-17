import AbstractView from '../AbstractView.js';



export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('CICD');
        
        this.prevScrollHeight = 0; // yOffset보다 이전에 위치한 스크롤 섹션들의 높이 합
        this.currentArticle = 0; // 현재 Scene(Scroll Section)
    }

    getHtml = async () => {
        return `
        <article id="scroll-article-0">
            <div class="jenkins-container">
                <div class="jenkins">
                    <img class="jenkins-image" src="/static/images/jenkins.png" alt="jenkins">
                    <p class="jenkins-message">I'm ganna deploy a web application, Business Card Maker</p>
                </div>
                <p class="scroll-message">Scroll down and the deploy will start!</p>
            </div>
            <div class="sticky-elem git-image-container">
                <div class="git-image">
                    <img src="/static/images/git.png" alt="git">
                </div>
            </div>
            <div class="sticky-elem git-message-container">
                <div class="git-message">
                    <p>$ git clone https://business-card-maker.git</p>
                </div>
            </div>
            <div class="sticky-elem git-loading-container">
                <p>Cloning into 'business-card-maker'...</p>
                <div class="git-loading">
                    <div class="git-loading-ratio"></div>
                </div>
            </div>
            
        </article>
        <article id="scroll-article-1">
            <div class="sticky-elem webpack-image-container">
                <div class="webpack-image">
                    <img src="/static/images/webpack.png" alt="webpack">
                </div>
            </div>
            <div class="sticky-elem webpack-message-container">
                <div class="webpack-message">
                    <p>$ webpack build --env production </p>
                </div>
            </div>
            <div class="sticky-elem files-image-container">
                <div class="files-image">
                    <img src="/static/images/files.png" alt="files">
                </div>
            </div>
            
            <div class="sticky-elem ajs-image-container">
                <div class="ajs-image">
                    <img src="/static/images/ajs.png" alt="a js">
                </div>
            </div>
            <div class="sticky-elem docker-image-container">
                <div class="docker-image">
                    <img src="/static/images/docker.png" alt="docker">
                </div>
            </div>
        </article>
        <article id="scroll-article-2">
            <div class="sticky-elem docker-image-container">
                <div class="docker-image">
                    <img src="/static/images/docker.png" alt="docker">
                </div>
            </div>
            <div class="sticky-elem docker-message-container">
                <div class="docker-message">
                    <p>$ docker image build . </p>
                </div>
            </div>
            <div class="sticky-elem dockerimage-image-container">
                <div class="dockerimage-image">
                    <img src="/static/images/dockerimage.png" alt="dockerimage">
                </div>
            </div>
            <div class="sticky-elem ecr-image-container">
                <div class="ecr-image">
                    <img src="/static/images/ecr.png" alt="ecr">
                </div>
            </div>
            <div class="sticky-elem push-message-container">
                <div class="push-message">
                    <p>$ docker push \${ECR_URL}:\${BUILD_NUM}</p>
                </div>
            </div>
        </article>
        <article id="scroll-article-3">
            <div class="sticky-elem ecs-image-container">
                <div class="ecs-image">
                    <img src="/static/images/ecs.png" alt="ecs">
                </div>
            </div>
            <div class="sticky-elem codedeploy-image-container">
                <div class="codedeploy-image">
                    <img src="/static/images/codedeploy.png" alt="codedeploy">
                </div>
            </div>
            <div class="sticky-elem codedeploy-message-container">
                <div class="codedeploy-message">
                    <p>CodeDeploy will deploy to ECS!</p>
                </div>
            </div>
            <div class="sticky-elem codedeploy-loading-container">
                <h1>Deploying from codedeploy...</h1>
                <p>Step 1: <small>Deploying replacement task set</small></p>
                <div class="codedeploy-loading">
                    <div class="codedeploy-loading-ratio-1"></div>
                </div>
                <p>Step 2: <small>Rerouting production traffic to replacement task set</small></p>
                <div class="codedeploy-loading">
                    <div class="codedeploy-loading-ratio-2"></div>
                </div>
                <p>Step 3: <small>Terminate original task set</small></p>
                <div class="codedeploy-loading">
                    <div class="codedeploy-loading-ratio-3"></div>
                </div>
            </div>
            <div class="sticky-elem complete-message-container">
                <div class="complete-message">
                    <p>Deployment is complete!</p>
                    <a class="goto" href="https://aylee.shop" target="_blank">Go to Business Card Maker</a>
                </div>
            </div>
        </article>
        `;
    }

    init() {
        this.articleInfo = [
            {
                // 0
                type: 'sticky',
                heightNum: 5, // scrollHeight를 브라우저 높이의 5배로
                scrollHeight: 0,
                objs: {
                    container: document.querySelector('#scroll-article-0'),
                    git_image: document.querySelector('.git-image-container'),
                    git_message_container: document.querySelector('.git-message-container'),
                    git_message: document.querySelector('.git-message'),
                    git_loading_container: document.querySelector('.git-loading-container'),
                    git_loading_ratio: document.querySelector('.git-loading-ratio'),
        
                },
                values: {
                    git_image_opacity_in: [0, 1, { start: 0.1, end: 0.2}],
                    git_image_translateY_in: [0, -80, { start: 0.1, end: 0.2}],
                    git_message_container_opacity_in: [0, 1, { start: 0.15, end: 0.25 }],
                    git_message_container_translateY_in: [200, 500, { start: 0.15, end: 0.25}],
                    git_message_width: [0.7, 18.2, { start: 0.25, end: 0.4}],
                    // 0.48
        
                    git_loading_container_opacity_in: [0, 1, { start: 0.5, end: 0.55}],
                    git_loading_ratio_width: [0, 100, { start: 0.55, end: 0.75}],
                    // 0.83
                    
        
                    git_image_opacity_out: [1, 0, { start: 0.45, end: 0.5}],
                    git_image_translateY_out: [-80, 0, { start: 0.45, end: 0.5}],
                    git_message_container_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
                    git_message_container_translateY_out: [500, 200, { start: 0.45, end: 0.5}],
                    git_loading_container_opacity_out: [1, 0, { start: 0.85, end: 0.9}],
                }
            },
            {   // 1
                type: 'sticky',
                heightNum: 5,
                scrollHeight: 0,
                objs: {
                    container: document.querySelector('#scroll-article-1'),
                    webpack_image: document.querySelector('.webpack-image-container'),
                    webpack_message_container: document.querySelector('.webpack-message-container'),
                    webpack_message: document.querySelector('.webpack-message'),
                    files_image: document.querySelector('.files-image-container'),
                    
                    ajs_image: document.querySelector('.ajs-image-container'),
                    docker_image: document.querySelector('.docker-image-container'),
        
                    files_image_for_scale: document.querySelector('.files-image'),
                    ajs_image_for_scale: document.querySelector('.ajs-image'),
                    
                    
        
        
                },
                values: {
        
                    webpack_image_opacity_in: [0, 1, { start: 0.05, end: 0.1}],
                    webpack_image_translateY_in: [0, -100, { start: 0.05, end: 0.1}],
                    webpack_message_container_opacity_in: [0, 1, { start: 0.1, end: 0.15 }],
                    files_image_opacity_in: [0, 1, { start: 0.05, end: 0.1}],
                    // 0.22
                    
                    webpack_message_width: [0.7, 14, { start: 0.15, end: 0.25}],

                    docker_image_translateY_in: [300, 30, {start: 0.5, end: 0.6}],
                    docker_image_opacity_in: [0, 1, {start: 0.5, end: 0.6}],
                    files_image_scale: [1, 0.1, { start: 0.43, end: 0.6}],
                    files_image_translateY: [0, -250, { start: 0.43, end: 0.6}],
                    // 0.62
        
                    ajs_image_opacity_in: [0, 1, {start: 0.65, end: 0.75}],
                    ajs_image_translateY_in: [0, 300, {start: 0.65, end: 0.8}],
                    // 0.82
                    
                    webpack_message_container_opacity_out: [1, 0, { start: 0.3, end: 0.35 }],
                    
                    files_image_opacity_out: [1, 0, { start: 0.5, end: 0.55}],
                    ajs_image_opacity_out: [1, 0, {start: 0.85, end: 0.9}],
                    ajs_image_translateY_out: [300, 600, {start: 0.85, end: 0.9}],
                    webpack_image_opacity_out: [1, 0, { start: 0.85, end: 0.9}],
                    webpack_image_translateY_out: [-100, -200, { start: 0.85, end: 0.9}],
                    docker_image_translateY_out: [30, 300, {start: 0.85, end: 0.99}],
                    docker_image_opacity_out: [1, 0, {start: 0.9, end: 0.99}],
        
        
                }
            },
            {   // 2
                type: 'sticky',
                heightNum: 5,
                scrollHeight: 0,
                objs: {
                    container: document.querySelector('#scroll-article-2'),
                    docker_image: document.querySelector('#scroll-article-2 .docker-image-container'),
                    docker_message_container: document.querySelector('.docker-message-container'),
                    docker_message: document.querySelector('.docker-message'),
                    // dockerfile_image: document.querySelector('.dockerfile-image-container'),
                    dockerimage_image: document.querySelector('.dockerimage-image-container'),
                    ecr_image: document.querySelector('.ecr-image-container'),
                    push_message_container: document.querySelector('.push-message-container'),
                    push_message: document.querySelector('.push-message'),
                    docker_image_for_scale: document.querySelector('#scroll-article-2 .docker-image'),
                },
                values: {
                    docker_image_translateY_in: [-200, 0, {start: 0.05, end: 0.2}],
                    docker_image_opacity_in: [0, 1, {start: 0.01, end: 0.05}],
                    docker_image_scale_in: [1, 1, {start:0.01, end: 0.05}],
                    docker_message_container_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
                    docker_message_container_translateY_in: [-200, -500, { start: 0.15, end: 0.2}],
                    docker_message_width: [0.7, 9.4, { start: 0.2, end: 0.3}],
                    // dockerfile_image_translateY_in: [-100, -100, {start: 0.2, end: 0.3}],
                    // dockerfile_image_opacity_in: [0, 1, {start: 0.2, end: 0.3}],
                    // 0.32
                    dockerimage_image_opacity_in: [0, 1, {start: 0.5, end: 0.6}],
                    dockerimage_image_translateY_in: [0, 0, {start: 0.5, end: 0.6}],
                    ecr_image_opacity_in: [0, 1, {start: 0.55, end: 0.6}],
                    push_message_container_opacity_in: [0, 1, { start: 0.55, end: 0.6 }],
                    push_message_container_translateY_in: [800, 1000, { start: 0.55, end: 0.6}],
                    push_message_width: [0.7, 17.5, { start: 0.6, end: 0.7}],
            
                    // 0.73        

                    docker_image_scale_out: [1, 3, {start:0.35, end: 0.5}],
                
                    docker_message_container_opacity_out: [1, 0, { start: 0.35, end: 0.4 }],
                    docker_message_container_translateY_out: [-500, -200, { start: 0.35, end: 0.4}],
                    docker_image_translateY_out: [0, -100, {start: 0.35, end: 0.5}],
                    // dockerfile_image_opacity_out: [1, 0, {start: 0.35, end: 0.5}],
                    docker_image_opacity_out: [1, 0, {start: 0.5, end: 0.55}],
                    push_message_container_opacity_out: [1, 0, { start: 0.6, end: 0.65 }],
                    push_message_container_translateY_out: [1000, 800, { start: 0.6, end: 0.65}],

                    dockerimage_image_opacity_out: [1, 0, {start: 0.8, end: 0.9}],
                    dockerimage_image_translateY_out: [0, -150, {start: 0.8, end: 0.9}],
                    ecr_image_opacity_out: [1, 0, {start: 0.9, end: 0.95}],
        
                }
            },
            {   // 3
                type: 'sticky',
                heightNum: 5,
                scrollHeight: 0,
                objs: {
                    container: document.querySelector('#scroll-article-3'),
                    ecs_image: document.querySelector('.ecs-image-container'),
                    codedeploy_image: document.querySelector('.codedeploy-image-container'),
                    codedeploy_message_container: document.querySelector('.codedeploy-message-container'),
                    codedeploy_message: document.querySelector('.codedeploy-message'),
                    codedeploy_loading_container: document.querySelector('.codedeploy-loading-container'),
                    codedeploy_loading_ratio_1: document.querySelector('.codedeploy-loading-ratio-1'),
                    codedeploy_loading_ratio_2: document.querySelector('.codedeploy-loading-ratio-2'),
                    codedeploy_loading_ratio_3: document.querySelector('.codedeploy-loading-ratio-3'),
                    complete_message_container: document.querySelector('.complete-message-container'),
                },
                values: {
                    ecs_image_opacity_in: [0, 1, {start: 0.05, end: 0.1}],
                    ecs_image_translateY_in: [-200, -150, {start: 0.05, end: 0.1}],
                    codedeploy_image_opacity_in: [0, 1, {start: 0.05, end: 0.1}],
                    codedeploy_image_translateY_in: [100, 50, {start: 0.05, end: 0.1}],
                    codedeploy_message_container_opacity_in: [0, 1, { start: 0.05, end: 0.1 }],
                    codedeploy_message_container_translateY_in: [0, -40, { start: 0.05, end: 0.1}],
                    // 0.15
                    codedeploy_loading_container_opacity_in: [0, 1, { start: 0.3, end: 0.35}],
                    codedeploy_loading_ratio_1_width: [0, 100, { start: 0.35, end: 0.4}],
                    codedeploy_loading_ratio_2_width: [0, 100, { start: 0.45, end: 0.5}],
                    codedeploy_loading_ratio_3_width: [0, 100, { start: 0.55, end: 0.6}],
                    // 0.63

                    complete_message_container_opacity_in: [0, 1, { start: 0.7, end: 0.75 }],
        
        
                    codedeploy_message_container_opacity_out: [1, 0, { start: 0.2, end: 0.25 }],
                    codedeploy_message_container_translateY_out: [-40, 0, { start: 0.2, end: 0.25}],
                    codedeploy_image_opacity_out: [1, 0, {start: 0.2, end: 0.25}],
                    codedeploy_image_translateY_out: [50, 100, {start: 0.2, end: 0.25}],
                    ecs_image_opacity_out: [1, 0, {start: 0.2, end: 0.25}],
                    ecs_image_translateY_out: [-150, -200, {start: 0.2, end: 0.25}],
                    
                    codedeploy_loading_container_opacity_out: [1, 0, { start: 0.65, end: 0.7}],
                    
        
                    
                    // complete_message_container_opacity_out: [1, 0, { start: 0.9, end: 0.95 }],
                    
                }
            }
        ];
    }

    setLayout = (yOffset) => {
        
        this.articleInfo.forEach( info => {
            if (info.type === 'sticky') {
                info.scrollHeight = info.heightNum * window.innerHeight;
            }
            info.objs.container.style.height = `${info.scrollHeight}px`;
        });
    
        this.yOffset = window.pageYOffset;
        let totalScrollHeight = 0;
        for (let i = 0; i < this.articleInfo.length; i++) {
            totalScrollHeight += this.articleInfo[i].scrollHeight;
            if (totalScrollHeight >= this.yOffset) {
                this.currentArticle = i;
                break;
            }
        }
        document.body.setAttribute('id', `show-article-${this.currentArticle}`);
        this.scrollLoop(yOffset);
    }
    
    scrollLoop = (yOffset) => {
        this.yOffset = yOffset;
    
        if (this.yOffset > this.prevScrollHeight + this.articleInfo[this.currentArticle].scrollHeight) {
            if (this.currentArticle === this.articleInfo.length - 1) return;
            this.currentArticle++;
            document.body.setAttribute('id', `show-article-${this.currentArticle}`);
        }
    
        if (this.yOffset < this.prevScrollHeight) {
            if (this.currentArticle === 0) return;
            this.currentArticle--;
            document.body.setAttribute('id', `show-article-${this.currentArticle}`);
        }

        this.prevScrollHeight = 0;
        for (let i = 0; i< this.currentArticle; i++) {
            this.prevScrollHeight += this.articleInfo[i].scrollHeight;
        }
        
        this.playAnimation();
    
    }
    
    calcValues = (values, currentYOffset) => {
        // [0, 1, { start: 0.1, end: 0.2 }]
        let rv;
        const scrollHeight = this.articleInfo[this.currentArticle].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;
    
        if (values.length > 2) {
            // start end 존재 (애니메이션 되는 구체적인 범위)
            const partScrollStart = values[2].start * scrollHeight;
            const partScrollEnd = values[2].end * scrollHeight;
            const partScrollHeight = partScrollEnd - partScrollStart;
    
            if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
                rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];
            } else if (currentYOffset < partScrollStart) {
                rv = values[0];
            } else if (currentYOffset > partScrollEnd) {
                rv = values[1];
            }
            
        } else {
            rv = scrollRatio * (values[1] - values[0]) + values[0];
        }
        
        return rv;
    }
    
    playAnimation = () => {
        const objs = this.articleInfo[this.currentArticle].objs;
        const values = this.articleInfo[this.currentArticle].values;
        const currentYOffset = this.yOffset - this.prevScrollHeight;
        const scrollRatio = currentYOffset / this.articleInfo[this.currentArticle].scrollHeight;
     
        
        switch (this.currentArticle) {
            case 0:
                // console.log('0 play');
                if (scrollRatio < 0.48) {
                    objs.git_image.style.opacity = this.calcValues(values.git_image_opacity_in, currentYOffset);
                    objs.git_image.style.transform = `translate3d(-50%, ${this.calcValues(values.git_image_translateY_in, currentYOffset)}%, 0)`;
                    objs.git_message_container.style.opacity = this.calcValues(values.git_message_container_opacity_in, currentYOffset); 
                    objs.git_message_container.style.transform = `translate3d(-50%, ${this.calcValues(values.git_message_container_translateY_in, currentYOffset)}%, 0)`;
                    objs.git_message.style.width = `${this.calcValues(values.git_message_width, currentYOffset)}em`;
                } else {
                    objs.git_image.style.opacity = this.calcValues(values.git_image_opacity_out, currentYOffset);
                    objs.git_image.style.transform = `translate3d(-50%, ${this.calcValues(values.git_image_translateY_out, currentYOffset)}%, 0)`;
                    objs.git_message_container.style.opacity = this.calcValues(values.git_message_container_opacity_out, currentYOffset);
                    objs.git_message_container.style.transform = `translate3d(-50%, ${this.calcValues(values.git_message_container_translateY_out, currentYOffset)}%, 0)`;
                } 
                if (scrollRatio < 0.83) {
                    objs.git_loading_ratio.style.width = `${this.calcValues(values.git_loading_ratio_width, currentYOffset)}%`;
                    objs.git_loading_container.style.opacity = this.calcValues(values.git_loading_container_opacity_in, currentYOffset);
                } else {
                    objs.git_loading_container.style.opacity = this.calcValues(values.git_loading_container_opacity_out, currentYOffset);
                }
    
                break;
            case 1:
                if (scrollRatio < 0.22) {
                    objs.webpack_image.style.opacity = this.calcValues(values.webpack_image_opacity_in, currentYOffset);
                    objs.webpack_image.style.transform = `translate3d(-50%, ${this.calcValues(values.webpack_image_translateY_in, currentYOffset)}%, 0)`;
                    objs.webpack_message_container.style.opacity = this.calcValues(values.webpack_message_container_opacity_in, currentYOffset); 
                    objs.files_image.style.opacity = this.calcValues(values.files_image_opacity_in, currentYOffset);
                } else {
                    objs.webpack_image.style.opacity = this.calcValues(values.webpack_image_opacity_out, currentYOffset);
                    objs.webpack_image.style.transform = `translate3d(-50%, ${this.calcValues(values.webpack_image_translateY_out, currentYOffset)}%, 0)`;
                    objs.webpack_message_container.style.opacity = this.calcValues(values.webpack_message_container_opacity_out, currentYOffset); 
                    objs.files_image.style.opacity = this.calcValues(values.files_image_opacity_out, currentYOffset);
                    
                } 
                if (scrollRatio < 0.62) {
                    objs.webpack_message.style.width = `${this.calcValues(values.webpack_message_width, currentYOffset)}em`;
                    objs.docker_image.style.transform = `translate3d(-50%, ${this.calcValues(values.docker_image_translateY_in, currentYOffset)}%, 0)`;
                    objs.docker_image.style.opacity = this.calcValues(values.docker_image_opacity_in, currentYOffset);
                    objs.files_image.style.transform = `translate3d(-50%, ${this.calcValues(values.files_image_translateY, currentYOffset)}%, 0)`;
                    objs.files_image_for_scale.style.transform = `scale(${this.calcValues(values.files_image_scale, currentYOffset)})`;
                } else {
                    objs.docker_image.style.transform = `translate3d(-50%, ${this.calcValues(values.docker_image_translateY_out, currentYOffset)}%, 0)`;
                    objs.docker_image.style.opacity = this.calcValues(values.docker_image_opacity_out, currentYOffset);
                }
                if ( scrollRatio < 0.82) {
                    
                    objs.ajs_image.style.opacity = this.calcValues(values.ajs_image_opacity_in, currentYOffset);
                    objs.ajs_image.style.transform = `translate3d(-50%, ${this.calcValues(values.ajs_image_translateY_in, currentYOffset)}%, 0)`;
                } else {
                    objs.ajs_image.style.opacity = this.calcValues(values.ajs_image_opacity_out, currentYOffset);
                    objs.ajs_image.style.transform = `translate3d(-50%, ${this.calcValues(values.ajs_image_translateY_out, currentYOffset)}%, 0)`;
                }
                break;
            case 2:
                if (scrollRatio < 0.32) {
                    objs.docker_image.style.opacity = this.calcValues(values.docker_image_opacity_in, currentYOffset);
                    objs.docker_image.style.transform = `translate3d(-50%, ${this.calcValues(values.docker_image_translateY_in, currentYOffset)}%, 0)`;
                    objs.docker_message_container.style.opacity = this.calcValues(values.docker_message_container_opacity_in, currentYOffset); 
                    objs.docker_message_container.style.transform = `translate3d(-50%, ${this.calcValues(values.docker_message_container_translateY_in, currentYOffset)}%, 0)`;
                    // objs.dockerfile_image.style.opacity = this.calcValues(values.dockerfile_image_opacity_in, currentYOffset);
                    // objs.dockerfile_image.style.transform = `translate3d(-50%, ${this.calcValues(values.dockerfile_image_translateY_in, currentYOffset)}%, 0)`;
                    objs.docker_image_for_scale.style.transform = `scale(${this.calcValues(values.docker_image_scale_in, currentYOffset)})`;
                    objs.docker_message.style.width = `${this.calcValues(values.docker_message_width, currentYOffset)}em`;
                } else {
                    objs.docker_image.style.opacity = this.calcValues(values.docker_image_opacity_out, currentYOffset); 
                    objs.docker_image.style.transform = `translate3d(-50%, ${this.calcValues(values.docker_image_translateY_out, currentYOffset)}%, 0)`;
                    objs.docker_message_container.style.opacity = this.calcValues(values.docker_message_container_opacity_out, currentYOffset); 
                    objs.docker_message_container.style.transform = `translate3d(-50%, ${this.calcValues(values.docker_message_container_translateY_out, currentYOffset)}%, 0)`;
                    // objs.dockerfile_image.style.opacity = this.calcValues(values.dockerfile_image_opacity_out, currentYOffset); 
                    objs.docker_image_for_scale.style.transform = `scale(${this.calcValues(values.docker_image_scale_out, currentYOffset)})`;
                    
                } 
                if (scrollRatio < 0.73) {
                    objs.push_message_container.style.opacity = this.calcValues(values.push_message_container_opacity_in, currentYOffset); 
                    objs.push_message_container.style.transform = `translate3d(-50%, ${this.calcValues(values.push_message_container_translateY_in, currentYOffset)}%, 0)`;
                    objs.push_message.style.width = `${this.calcValues(values.push_message_width, currentYOffset)}em`;
                    objs.dockerimage_image.style.opacity = this.calcValues(values.dockerimage_image_opacity_in, currentYOffset); 
                    objs.dockerimage_image.style.transform = `translate3d(-50%, ${this.calcValues(values.dockerimage_image_translateY_in, currentYOffset)}%, 0)`;
                    objs.ecr_image.style.opacity = this.calcValues(values.ecr_image_opacity_in, currentYOffset); 
                } else {
                    objs.push_message_container.style.opacity = this.calcValues(values.push_message_container_opacity_out, currentYOffset); 
                    objs.push_message_container.style.transform = `translate3d(-50%, ${this.calcValues(values.push_message_container_translateY_out, currentYOffset)}%, 0)`;
                    objs.dockerimage_image.style.opacity = this.calcValues(values.dockerimage_image_opacity_out, currentYOffset); 
                    objs.dockerimage_image.style.transform = `translate3d(-50%, ${this.calcValues(values.dockerimage_image_translateY_out, currentYOffset)}%, 0)`;
                    objs.ecr_image.style.opacity = this.calcValues(values.ecr_image_opacity_out, currentYOffset); 
                }
                break;
            case 3:
                if (scrollRatio < 0.15) {

                    
                    objs.ecs_image.style.opacity = this.calcValues(values.ecs_image_opacity_in, currentYOffset);
                    objs.ecs_image.style.transform = `translate3d(-50%, ${this.calcValues(values.ecs_image_translateY_in, currentYOffset)}%, 0)`;
                    objs.codedeploy_image.style.opacity = this.calcValues(values.codedeploy_image_opacity_in, currentYOffset);
                    objs.codedeploy_image.style.transform = `translate3d(-50%, ${this.calcValues(values.codedeploy_image_translateY_in, currentYOffset)}%, 0)`;
                    objs.codedeploy_message_container.style.opacity = this.calcValues(values.codedeploy_message_container_opacity_in, currentYOffset);
                    objs.codedeploy_message_container.style.transform = `translate3d(-50%, ${this.calcValues(values.codedeploy_message_container_translateY_in, currentYOffset)}%, 0)`;
                    
                } else {

                    objs.ecs_image.style.opacity = this.calcValues(values.ecs_image_opacity_out, currentYOffset);
                    objs.ecs_image.style.transform = `translate3d(-50%, ${this.calcValues(values.ecs_image_translateY_out, currentYOffset)}%, 0)`;
                    objs.codedeploy_image.style.opacity = this.calcValues(values.codedeploy_image_opacity_out, currentYOffset);
                    objs.codedeploy_image.style.transform = `translate3d(-50%, ${this.calcValues(values.codedeploy_image_translateY_out, currentYOffset)}%, 0)`;
                    objs.codedeploy_message_container.style.opacity = this.calcValues(values.codedeploy_message_container_opacity_out, currentYOffset);
                    objs.codedeploy_message_container.style.transform = `translate3d(-50%, ${this.calcValues(values.codedeploy_message_container_translateY_out, currentYOffset)}%, 0)`;
                }
               
                if (scrollRatio < 0.63) {
                    objs.codedeploy_loading_container.style.opacity = this.calcValues(values.codedeploy_loading_container_opacity_in, currentYOffset);
                    objs.codedeploy_loading_ratio_1.style.width = `${this.calcValues(values.codedeploy_loading_ratio_1_width, currentYOffset)}%`;
                    objs.codedeploy_loading_ratio_2.style.width = `${this.calcValues(values.codedeploy_loading_ratio_2_width, currentYOffset)}%`;
                    objs.codedeploy_loading_ratio_3.style.width = `${this.calcValues(values.codedeploy_loading_ratio_3_width, currentYOffset)}%`;
                    
                } else {
                    objs.codedeploy_loading_container.style.opacity = this.calcValues(values.codedeploy_loading_container_opacity_out, currentYOffset);
                }
                if (scrollRatio < 0.83) {
                    
                    objs.complete_message_container.style.opacity = this.calcValues(values.complete_message_container_opacity_in, currentYOffset);
                } else {
                    
                    // objs.complete_message_container.style.opacity = this.calcValues(values.complete_message_container_opacity_out, currentYOffset);
                }
                break;
        }
        
    }
}