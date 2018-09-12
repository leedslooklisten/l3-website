#!bin/bash

if [ "$1" = "" ]; then
    echo "Usage: sh deploy.sh [deployment version]"
    exit
fi

# set environment
# export env=dockerdev

# build
yarn run build # build static files
GOOS=linux go build # build Golang webserver

# delete old image
docker stop ls-website
docker rm ls-website
docker rmi us.gcr.io/leedslooklisten-com/ls-website:$1

# create docker image
docker build -t us.gcr.io/leedslooklisten-com/ls-website:$1 .

# run docker dev
# docker run --name ls-website -e "env=dockerdev" -p 8080:80 us.gcr.io/leedslooklisten-com/ls-website:0.1

# run prod test
# docker run --name ls-website -e "env=beta" -p 8080:80 us.gcr.io/leedslooklisten-com/ls-website:$1

# deploy to Gcloud

docker push us.gcr.io/leedslooklisten-com/ls-website:$1
gcloud compute instances update-container ls-website --container-image=us.gcr.io/leedslooklisten-com/ls-website:$1
