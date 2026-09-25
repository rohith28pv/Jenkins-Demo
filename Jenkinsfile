pipeline {
	agent any

	triggers {
		githubpush()
	}

	stages{
		stage('Checkout'){
			steps{
				checkout scm
			}
		}
	
		stage('Build'){
			steps{
				echo "Building the Applications"
			}
		}
	
		stage('Test'){
			steps{
				echo "Running Test..."
			}
		}

		stage('Deploy'){
			steps{
				echo "Deploying application..."
			}
		
		}
	}
}
