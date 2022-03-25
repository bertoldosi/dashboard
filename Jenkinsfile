pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
        tools {nodejs “v16”}
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
