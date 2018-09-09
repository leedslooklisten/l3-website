FROM alpine
RUN apk add --no-cache ca-certificates
COPY l3-website /gowebserver
ADD build /build
EXPOSE 80
ENTRYPOINT ["/gowebserver"]