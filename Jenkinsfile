import groovy.transform.Field

def S3_BUCKET = "aylee-deploy"

@Field def REVISION = ""
def DEPLOYMENT_GROUP = "dev"

pipeline {
    agent any
    tools {nodejs "nodejs15"}
    environment {
        PATH = "$PATH"
    }
    stages {
        stage('Webpack Build') {           
            steps {            
                script {
                    try {
                        sh "npm install"
                        sh "npm run build"
                        env.webpackBuildResult = true
                        
                    } catch(Exception e) {
                        print(e)
                        cleanWs()
                        currentBuild.result = 'FAILURE'
                    }
                }
            }
        }
        stage('Zip') {
            when {
                expression {
                    return env.webpackBuildResult ==~ /(?i)(Y|YES|T|TRUE|ON|RUN)/
                }
            }
            steps {
                script {
                    try {
                        sh "mkdir tmp"

                        sh "sudo cp -r frontend/dist tmp/"
                        sh "sudo cp -r frontend/static/css tmp/"
                        sh "sudo cp -r frontend/static/images tmp/"
                        sh "sudo cp frontend/index.html tmp/"
                        sh "sudo cp server.js tmp/"

                        dir("${JENKINS_HOME}/workspace/${JOB_NAME}/tmp") {
                            createAppspecAndUpload()
                        }


                    } catch(Exception e) {
                        print(e)
                        cleanWs()
                        currentBuild.result = 'FAILURE'
                    }
                }
            }
        }
//         stage('Deploy') {
//             when {
//                 expression {
//                     return env.zipResult ==~ /(?i)(Y|YES|T|TRUE|ON|RUN)/
//                 }
//             }
//             steps {
//                 script {
//                     try {
                        
//                         def cmd = """
// aws deploy create-deployment \
//     --application-name ${JOB_NAME} \
//     --deployment-group-name ${DEPLOYMENT_GROUP} \
//     --s3-location bucket=${S3_BUCKET},key=${JOB_NAME}/${DEPLOYMENT_GROUP}/appspec.zip,bundleType=zip | jq '.deploymentId' -r
//                         """

//                         def deploymentId = withAWS(credentials:"aws-access-key", region: 'ap-northeast-2') {
//                             return executeAwsCliByReturn(cmd)
//                         }
                        

//                         cmd = "aws deploy get-deployment --deployment-id ${deploymentId} | jq '.deploymentInfo.status' -r"
//                         def result = ""
//                         timeout(unit: 'SECONDS', time: 600) {
//                             while ("${result}" != "Succeeded") {
//                                 if ("${result}" == "Failed") {
//                                     exit 1
//                                 }
//                                 result = withAWS(credentials:"aws-access-key", region: 'ap-northeast-2') {
//                                     return executeAwsCliByReturn(cmd)
//                                 }
//                                 print("${result}")
//                                 sleep(15)
//                             }
//                         }

//                     } catch(Exception e) {
//                         print(e)
//                         cleanWs()
//                         currentBuild.result = 'FAILURE'
//                     } finally {
//                         cleanWs()
//                     }
//                 }
//             }
//         }
    }
}


def createAppspecAndUpload() {
    sh """
cat << EOF > appspec.yaml
version: 0.0
os: linux
files:
  - source:  /
    destination: /home/jenkins/deploy

permissions:
  - object: /
    pattern: "**"
    owner: jenkins
    group: jenkins

hooks:
  ApplicationStart:
    - location: deploy.sh
      timeout: 60
      runas: root
EOF
    """

    sh """
cat << EOF > deploy.sh
#!/bin/bash
kill -9 `ps -ef | grep server.js | grep -v grep | awk '{print \$2}'`
nohup node server.js 1> /dev/null 2>&1 &
EOF
    """

    sh "zip appspec.zip *"

    withAWS(credentials:"aws-access-key", region: 'ap-northeast-2') {
        sh "aws s3 cp appspec.zip s3://${S3_BUCKET}/${JOB_NAME}/${DEPLOYMENT_GROUP}/appspec.zip"
    }
}


def  executeAwsCliByReturn(cmd){
    return sh(returnStdout: true, script: cmd).trim()
}