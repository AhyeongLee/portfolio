# Portfolio Website


바로가기: [portfolio.aylee.shop](https://portfolio.aylee.shop)


<details open="open">
  <summary>개요</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#screen-shots">Screen Shots</a></li>
    <li><a href="#cdn">CDN</a></li>
    <li><a href="#cicd">CICD</a></li>
  </ol>
</details>
</br>

---

</br>

## About The Project
Front-End 포트폴리오 웹사이트로 반응형으로 개발.<br>
`Vanilla JS`로 SPA를 구현.<br>
`AWS EC2`에 배포했고 배포는 `Jenkins`와 `CodeDeploy`를 이용했다.<br>
`html`, `css`, `image`들은 `AWS S3`에 업로드 했고 `AWS CloudFront`를 구축해서 캐싱이 가능하도록 했다.


## Skills

- Vanilla JS
- HTML/CSS
- Webpack
- Babel
- Jenkins
- AWS
    - EC2
    - CodeDeploy
    - S3
    - CloudFront

## Screen Shots
(모바일에서는 Home의 애니메이션은 없음)
![portfolio_720](https://user-images.githubusercontent.com/40782494/108579839-3d7a0080-736c-11eb-9cf8-3325a6ee2e79.gif)
<br><br>

## CDN
AWS CDN 서비스 Cloudfront를 이용하여 구축

Cloudfront Domain : d6cibru4nqeka.cloudfront.net
![image](https://user-images.githubusercontent.com/40782494/108580511-1d980c00-736f-11eb-8d3c-ee7e5cad89df.png)<br>

![image](https://user-images.githubusercontent.com/40782494/108580454-dc076100-736e-11eb-890f-44b9027e579c.png)<br>
(출처: AWS)

S3에 직접 접근하면 Access Denied
![image](https://user-images.githubusercontent.com/40782494/108580774-54baed00-7370-11eb-9c3d-062cdc9c9ec5.png)


## CICD
- Github
- Jenkins
    - Jenkinsfile은 Github에서 가져옴
    - Jenkins Pipeline
        ```
        stages {
            stage('Webpack Build') {
                - npm install
                - webpack build
            }
            stage('Zip') {
                - copy frontend/dist, frontend/index.html to tmp/
                - create appspec.yml
                - zip & upload to S3
            }
            stage('Deploy') {
                - create deployment(AWS CodeDeploy)
                - wait while the deployment is complete
            }
        }
        ```
        ![image](https://user-images.githubusercontent.com/40782494/108580270-2b995d00-736e-11eb-9a3f-57b3b0508b46.png)

- AWS CodeDeploy
    - EC2 In Place 배포 
    ![image](https://user-images.githubusercontent.com/40782494/108580315-54215700-736e-11eb-9f92-9837fa458226.png)

