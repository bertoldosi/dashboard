pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
        tools {nodejs “v16.10.0”}
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh -o install_nvm.sh'
                sh 'bash install_nvm.sh'
                sh 'nvm use'
                sh 'npm install'
            }
        }
     stage('Exec app') {
        steps {
            sh 'npm run dev'
        }
    }
    }
}
