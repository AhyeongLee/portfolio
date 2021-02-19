import AbstractView from '../AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('AWS');
    }

    getHtml = async () => {
        return `
            <div class="aws-experience-container">
                <h1 class="aws-h1">AWS Work Experience</h1>
                <article class="aws-article">
                    <div class="experience-info">
                        <h1 class="experience-name">롯데백화점 - 백화점 디지탈플랫폼</h1>
                        <h1 class="experience-role">AWS Cloud Architect</h1>
                        <h4 class="experience-date">2020.06 ~ 2020.09</h4>
                        <ul class="experience-detail">
                            <li>CICD</li>
                            <li>Monitoring 구성</li>
                            <li>자동화(Lambda + CloudWatch Events)</li>
                        </ul>
                    </div>                    
                </article> 
                <article class="aws-article">
                    <div class="experience-info">
                        <h1 class="experience-name">은광 - BI 시스템 인프라 구축</h1>
                        <h1 class="experience-role">AWS Cloud Architect</h1>
                        <h4 class="experience-date">2020.03 ~ 2020.05</h4>
                        <ul class="experience-detail">
                            <li>AWS Cloud Architecture</li>
                            <li>Monitoring 구성</li>
                            <li>자동화(Lambda + CloudWatch Events)</li>
                            <li>Lambda & StepFunction 구성</li>
                        </ul>
                    </div>                    
                </article>     
                <article class="aws-article">
                    <div class="experience-info">
                        <h1 class="experience-name">롯데정보통신 - APN Billing Portal</h1>
                        <h1 class="experience-role">AWS Cloud Architect</h1>
                        <h4 class="experience-date">2019.08 ~ 2020.03</h4>
                        <ul class="experience-detail">
                            <li>AWS Cloud Architecture</li>
                            <li>Monitoring 구성</li>
                        </ul>
                    </div>                    
                </article>   
                <article class="aws-article">
                    <div class="experience-info">
                        <h1 class="experience-name">롯데컬쳐웍스 - 챗봇 발권 시스템</h1>
                        <h1 class="experience-role">AWS Cloud Architect</h1>
                        <h4 class="experience-date">2019.08 ~ 2020.03</h4>
                        <ul class="experience-detail">
                            <li>CICD</li>
                            <li>Monitoring 구성</li>
                            <li>자동화(Lambda + CloudWatch Events)</li>
                            <li>매니지드 서비스 수행</li>
                        </ul>
                    </div>                    
                </article>  
                <article class="aws-article">
                    <div class="experience-info">
                        <h1 class="experience-name">Nikon Korea ‒ A S Web Service</h1>
                        <h1 class="experience-role">AWS Cloud Architect</h1>
                        <h4 class="experience-date">2019.08 ~ 2019.12</h4>
                        <ul class="experience-detail">
                            <li>매니지드 서비스 수행</li>
                        </ul>
                    </div>                    
                </article>              
            </div>
            <div class="aws-certificate">
                <h1 class="aws-h1">AWS Certificate</h1>
                <h1 class="certificate-name">AWS Certified Solutions Architect</h1>
                <ul class="certificate-detail">
                    <li class="certificate-info">
                        <h1 class="certificate-grade">Professional(SAP)</h1>
                        <h4 class="certificate-date">2020.10.28</h4>
                    </li>
                    <li class="certificate-info">
                        <h1 class="certificate-grade">Associate(SAA)</h1>
                        <h4 class="certificate-date">2019.07.08</h4>
                    </li>
                </ul>
                
            </div>
        `;
    }
}