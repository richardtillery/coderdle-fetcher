# Coderdle Fetcher 
Dockerized:

docker build --tag coderdle-fetcher .

docker run -p 8888:3001 -d coderdle-fetcher

docker images

docker container ls -a

docker ps -a

docker start \<container id\>

docker stop \<container id\>



# (Deprecated) Coderdle Fetcher Lambda

To run:

npm run test coderdle-2.carcewp2x8m5.us-west-2.rds.amazonaws.com admin <password>

npm run test localhost root password



To upload:

zip coderdle-fetcher.zip index.mjs

aws lambda update-function-code --function-name coderdle-fetcher --zip-file file://coderdle-fetcher.zip
