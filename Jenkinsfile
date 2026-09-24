pipeline {
	agent any
	stages{
		stage('Checkout'){
			steps{
				checkout scm
			}
		}
	
		stage('Build'){
			steps{
				sh 'python3 -m py_compile app.py'
			}
		}
	
		stage('Test'){
			steps{
				sh 'python3 -c "from app import add; assert add(2,3) == 5"'
			}
		}
	}
}
