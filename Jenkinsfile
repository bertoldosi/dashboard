pipeline {
    agent {
        docker {
            image 'node:16.10.0-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
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
