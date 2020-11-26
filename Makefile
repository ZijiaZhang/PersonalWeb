docker:
	docker build -t personal_web:latest .
	docker tag personal_web:latest localhost:5000/personal_web:latest
	docker push localhost:5000/personal_web:latest
