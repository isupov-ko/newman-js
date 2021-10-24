# Pull the newman docker image from docker hub (base on Alpine Linux and Node 10):
docker pull postman/newman

# run shell in container
docker run --rm -it --entrypoint /bin/ash postman/newman

# basic collection run from local directory C:\github\newman-js\collections
docker run --rm -t -v C:\github\newman-js\collections:/etc/newman postman/newman run super_collection.postman_collection.json

# run js script that will launch Newman
docker run --rm -it --entrypoint node -v C:\github\newman-js\collections:/etc/newman postman/newman newman_run.js super_collection.postman_collection.json

