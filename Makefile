.PHONY: build run

build:
	go build

run:
	make build && ./main

run-dockerised:
	make build \
	&& docker build --tag go-chat-app:latest . \
	&& docker run --publish 5000:5000 --detach --name chat-app go-chat-app:latest

test:
	go test -v
