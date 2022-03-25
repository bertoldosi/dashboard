pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh -o install_nvm.sh'
                sh 'bash install_nvm.sh'
                sh 'export NVM_DIR="$HOME/.nvm"
                  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
                  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion'
                sh 'source ~/.bash_profile'
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
