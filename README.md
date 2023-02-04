```sh
docker run --rm -v $(PWD):/app -w /app node:alpine3.17 npm init -y 
docker run --rm -v $(PWD):/app -w /app node:alpine3.17 npm install express swagger-jsdoc swagger-ui-express
docker run --rm -v $(PWD):/app -w /app node:alpine3.17 npm install nodemon --save-dev

docker run --rm -v $(PWD):/app -w /app -p 8080:8080 node:alpine3.17 npm start
```
