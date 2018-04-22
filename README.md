# l3-website
leeds look listen Customer Website

## dev
develop using webpack-dev-server
- run `yarn start`
- navigate to localhost:3000


## prod
### build only
build the docker images
`docker-compose build`

### start
build and run both docker images.
`docker-compose up --build -d`
- starts and nginx server at `~/site/`
- runs a production build and deploys it to `~/site/`
