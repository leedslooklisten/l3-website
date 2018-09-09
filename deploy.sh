#!bin/bash

# set environment
# export env=dockerdev

# build
yarn run build # build static files
GOOS=linux go build # build Golang webserver

# delete old image
docker stop ls-website
docker rm ls-website
docker rmi us.gcr.io/leedslooklisten-com/ls-website:0.2

# create docker image
docker build -t us.gcr.io/leedslooklisten-com/ls-website:0.3 .

# run docker dev
# docker run --name ls-website -e "env=dockerdev" -p 8080:80 us.gcr.io/leedslooklisten-com/ls-website:0.1

# run prod test
docker run --name ls-website -e "env=beta" -p 8080:80 us.gcr.io/leedslooklisten-com/ls-website:0.3

# deploy to Gcloud

# docker push us.gcr.io/leedslooklisten-com/ls-website:0.3