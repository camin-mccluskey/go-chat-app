.PHONY: build run

build:
	go build

run:
	make build && ./main